import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { FirestoreService, FirestoreBuilderService } from '@iresa/firestore';
import { map, switchMap, delay } from 'rxjs/operators';
import { SpotifyService } from '@iresa/ngx-spotify';

@Injectable()
export class PlaylistsService {
  constructor(
    private firestore: FirestoreService,
    private spotifyService: SpotifyService
  ) {}

  getPlaylists(stationId: string) {
    const query = {
      structuredQuery: {
        select: {
          fields: [
            { fieldPath: 'id' },
            { fieldPath: 'images' },
            { fieldPath: 'name' },
            { fieldPath: 'type' }
          ]
        },
        from: [{ collectionId: 'playlists' }]
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

  removeAllSongList(stationId) {
    return this.getSongList(stationId).pipe(
      switchMap(list => this.deleteSongList(stationId, list))
    );
  }

  deleteTrackList(stationId, playlistId, trackId) {
    const url = encodeURI(
      `documents/stations/${stationId}/playlists/${playlistId}/tracks/${trackId}`
    );
    return this.firestore.delete(url);
  }

  deleteSongList(stationId, list) {
    const arr = [];
    if (list.length > 0) {
      list.forEach(item => {
        const url = encodeURI(
          `documents/stations/${stationId}/songList/${item.recordId}`
        );
        arr.push(this.firestore.delete(url));
      });

      return forkJoin(arr);
    }
    return of([]);
  }

  getSongList(stationId: string): Observable<any> {
    const url = encodeURI(`documents/stations/${stationId}/songList`);
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
    return forkJoin(reqs).pipe(delay(1000));
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
    const fields = ['id', 'images', 'name', 'uri', 'artists', 'duration_ms'];

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

  getPlaylistTracks(stationId, playlist) {
    if (playlist.type === 'favorite') {
      return this.getFavPlaylistTracks(playlist);
    }
    return this.getCustPlaylistTracks(stationId, playlist);
  }

  getCustPlaylistTracks(stationId, playlist) {
    const url = encodeURI(
      `documents/stations/${stationId}/playlists/${playlist.recordId}/tracks`
    );
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

  getFavPlaylistTracks(playlist) {
    return this.spotifyService
      .getPlaylistTracks(playlist.id, { limit: 10 })
      .pipe(
        map(tracks => {
          return tracks.items.map(item => {
            const track = item.track;
            return {
              name: item.track.name,
              id: track.id,
              uri: track.uri,
              images: track.album.images.slice(0, 1),
              artists: this.toArtistNames(track.artists),
              duration_ms: track.duration_ms
            };
          });
        })
      );
  }

  toArtistNames(artists) {
    return artists.map(a => {
      return { name: a.name };
    });
  }
}
