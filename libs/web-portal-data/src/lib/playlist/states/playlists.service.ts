import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Injectable()
export class PlaylistsService {
  constructor(public db: AngularFirestore) {}

  getPlaylists(stationId: string) {
    return this.db
      .collection('stations')
      .doc(stationId)
      .collection('playlists')
      .valueChanges()
      .pipe(take(1));
  }

  savePlaylist(stationId: string, playlist: any): Observable<any> {
    const playlistRef = this.db
      .collection('stations')
      .doc(stationId)
      .collection('playlists')
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
    form['type'] = 'favorite';
    return form;
  }
}
