import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AlbumsPartialState, ALBUMS_FEATURE_KEY } from './albums.reducer';
import {
  LoadAlbums,
  AlbumsActionTypes,
  LoadAlbum,
  fromAlbumsActions,
  LoadAlbumTracks
} from './albums.actions';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { albumResult } from './config/album-result';
import { SpotifyService } from '@iresa/ngx-spotify';
import { DashboardFacade } from '../../dashboard';

@Injectable()
export class AlbumsEffects {
  @Effect() loadAlbums$ = this.dataPersistence.fetch(
    AlbumsActionTypes.LoadAlbums,
    {
      run: (action: LoadAlbums, state: AlbumsPartialState) => {
        const useSample = action.payload.useSample;
        if (!useSample) {
          return this.spotifyService
            .getArtistAlbums(action.payload)
            .pipe(map(val => new fromAlbumsActions.AlbumsLoaded(val.items)));
        }
      },

      onError: (action: LoadAlbums, error) => {
        return new fromAlbumsActions.AlbumsLoadError(error);
      }
    }
  );

  @Effect() loadAlbum$ = this.dataPersistence.fetch(
    AlbumsActionTypes.LoadAlbum,
    {
      run: (action: LoadAlbum, state: AlbumsPartialState) => {
        const useSample = action.payload.useSample;
        if (!useSample) {
          return this.spotifyService
            .getAlbum(action.payload)
            .pipe(map(val => new fromAlbumsActions.AlbumLoaded([val])));
        }

        const arr = [];
        arr.push(albumResult);
        return of(arr).pipe(
          map(val => {
            return new fromAlbumsActions.AlbumLoaded(val);
          })
        );
      },

      onError: (action: LoadAlbum, error) => {
        console.error('Error', error);
        return new fromAlbumsActions.AlbumLoadError(error);
      }
    }
  );

  @Effect() loadAlbumTracks$ = this.dataPersistence.fetch(
    AlbumsActionTypes.LoadAlbumTracks,
    {
      run: (action: LoadAlbumTracks, state: AlbumsPartialState) => {
        const albumId = action.payload.albumId;
        const album = this.findAlbum(state[ALBUMS_FEATURE_KEY].list, albumId);
        if (album && album.tracks) {
          if (album.tracks) {
            return new fromAlbumsActions.SetAlbumTracks({ album });
          } else {
            return this.spotifyService
              .getAlbumTracks(albumId)
              .pipe(
                map(
                  data =>
                    new fromAlbumsActions.SetAlbumTracks({
                      album: { ...album, tracks: { items: data.items } }
                    })
                )
              );
          }
        }

        return this.spotifyService
          .getAlbum(albumId)
          .pipe(
            map(
              data =>
                new fromAlbumsActions.SetAlbumTracks({
                  album: data,
                  trackPos: action.payload.trackPos
                })
            )
          );
      },

      onError: (action: LoadAlbumTracks, error) => {
        console.error('Error', error);
        return new fromAlbumsActions.AlbumLoadError(error);
      }
    }
  );

  findAlbum(list: any[], albumId) {
    return list.find(al => al.id === albumId);
  }

  constructor(
    private actions$: Actions,
    private spotifyService: SpotifyService,
    private dbFacade: DashboardFacade,
    private dataPersistence: DataPersistence<AlbumsPartialState>
  ) {}
}
