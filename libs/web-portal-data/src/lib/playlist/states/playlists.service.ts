import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FirestoreService } from '@iresa/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class PlaylistsService {
  constructor(private firestore: FirestoreService) {}

  getPlaylists(stationId: string) {
    const url = encodeURI(`documents/stations/${stationId}/playlists`);
    return this.firestore
      .get(url)
      .pipe(map(resp => resp.documents.map(item => item.fields)));
  }

  savePlaylist(stationId: string, playlist: any): Observable<any> {
    // const playlistRef = this.db
    //   .collection('stations')
    //   .doc(stationId)
    //   .collection('playlists')
    //   .doc(playlist.id);
    // return new Observable(observer => {
    //   playlistRef.set(this.playlistForm(playlist)).then(
    //     data => {
    //       observer.next(data);
    //     },
    //     reason => {}
    //   );
    // });
    return of([]);
  }

  playlistForm(playlist) {
    const form = {};
    form['id'] = playlist.id;
    form['images'] = playlist.images;
    form['name'] = playlist.name;
    form['type'] = 'favorite';
    return form;
  }
}
