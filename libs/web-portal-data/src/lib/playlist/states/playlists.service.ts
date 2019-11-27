import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { FirestoreService, FirestoreBuilderService } from '@iresa/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class PlaylistsService {
  constructor(private firestore: FirestoreService) {}

  getPlaylists(stationId: string) {
    const url = encodeURI(`documents/stations/${stationId}/playlists`);
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

  savePlaylist(stationId: string, playlist: any): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/playlists`);
    return this.firestore.post(url, { fields: this.playlistForm(playlist) });
  }

  addToPlaylist(stationId: string, playlistId, track): Observable<any> {
    const url = encodeURI(
      `documents/stations/${stationId}/playlists/${playlistId}/tracks`
    );
    return this.firestore.post(url, { fields: this.trackForm(track) });
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

  trackForm(track) {
    let form = {};
    const fields = ['id', 'images', 'name', 'uri', 'artists'];

    track = { ...track, images: track.album.images.slice(0, 1) };
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
