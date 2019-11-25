import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {
  constructor(private db: AngularFirestore) {}

  savePlaylist(stationId: string, playlist: any): Observable<any> {
    const playlistRef = this.db
      .collection('stations')
      .doc(stationId)
      .collection('savedPlaylist')
      .doc(playlist.id);
    return new Observable(observer => {
      playlistRef.set(this.playlistForm(playlist)).then(
        data => {
          observer.next(data);
        },
        reason => {}
      );
    });
  }

  playlistForm(playlist) {
    const form = {};
    form['id'] = playlist.id;
    form['images'] = playlist.images;
    form['name'] = playlist.name;
    form['artists'] = playlist.artists;
    return form;
  }
}
