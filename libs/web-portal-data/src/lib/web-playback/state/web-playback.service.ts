import { Injectable } from '@angular/core';
import { FirestoreService, FirestoreBuilderService } from '@iresa/firestore';
import { map, switchMap, delay } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';

@Injectable()
export class WebPlaybackService {
  constructor(private firestore: FirestoreService) {}

  getFavSongList(stationId) {
    const query = {
      structuredQuery: {
        limit: 5,
        from: [{ collectionId: 'songList' }],
        orderBy: [
          { field: { fieldPath: 'upvoteCount' }, direction: 'DESCENDING' }
        ]
      }
    };
    const url = encodeURI(`documents/stations/${stationId}:runQuery`);
    return this.firestore.post(url, query).pipe(
      map(resp =>
        resp.map(item => {
          const arr = item.document.name.split('/');
          return { ...item.document.fields, recordId: arr[arr.length - 1] };
        })
      )
    );
  }

  clearQueue(stationId) {
    return this.getQueueItems(stationId).pipe(
      switchMap(list => this.deleteQueue(stationId, list))
    );
  }

  deleteQueue(stationId, list) {
    const arr = [];
    if (list.length > 0) {
      list.forEach(item => {
        const url = encodeURI(
          `documents/stations/${stationId}/queue/${item.recordId}`
        );
        arr.push(this.firestore.delete(url));
      });

      return forkJoin(arr).pipe(delay(1000));
    }
    return of([]);
  }

  getQueueItems(stationId: string): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/queue`);
    return this.firestore.get(url).pipe(
      map(resp =>
        resp.documents
          ? resp.documents.map(item => {
              const arr = item.name.split('/');
              return { ...item.fields, recordId: arr[arr.length - 1] };
            })
          : []
      )
    );
  }

  addToQueue(stationId: string, track): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/queue`);
    return this.firestore.post(url, { fields: this.trackForm(track) });
  }

  trackForm(track) {
    let form = {};
    const fields = ['id', 'images', 'name', 'uri', 'artists', 'duration_ms'];

    if (track.images) {
      track = { ...track, images: track.images.slice(0, 1) };
    }
    fields.forEach(key => {
      if (track[key]) {
        if (key === 'artists') {
          form[key] = this.toArtistNames(track[key]);
        } else {
          form[key] = track[key];
        }
      }
    });
    form = FirestoreBuilderService.build(form);
    return form;
  }

  toArtistNames(artists) {
    return artists.map(a => {
      return { name: a.name };
    });
  }
}
