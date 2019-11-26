import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { FirestoreService, FirestoreBuilderService } from '@iresa/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class PlaylistsService {
  constructor(private firestore: FirestoreService) {}

  getPlaylists(stationId: string) {
    const url = encodeURI(`documents/stations/${stationId}/playlists`);
    return this.firestore
      .get(url)
      .pipe(
        map(resp =>
          resp.documents ? resp.documents.map(item => item.fields) : []
        )
      );
  }

  savePlaylist(stationId: string, playlist: any): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/playlists`);
    return this.firestore.post(url, { fields: this.playlistForm(playlist) });
  }

  setSongList(stationId: string, songList): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/songList`);
    const reqs = [];
    songList.forEach(element => {
      reqs.push(
        this.firestore.post(url, {
          fields: FirestoreBuilderService.build(element)
        })
      );
    });
    return forkJoin(reqs);
  }

  playlistForm(playlist) {
    let form = {};
    const fields = ['id', 'images', 'name', 'type'];

    fields.forEach(key => {
      if (playlist[key]) {
        form[key] = playlist[key];
      }
    });
    form = FirestoreBuilderService.build(form);
    return form;
  }
}
