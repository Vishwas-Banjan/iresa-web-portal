import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AlbumsPartialState } from './albums.reducer';
import {
  LoadAlbums,
  AlbumsActionTypes,
  LoadAlbum,
  fromAlbumsActions
} from './albums.actions';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { albumResult } from './config/album-result';

@Injectable()
export class AlbumsEffects {
  @Effect() loadAlbums$ = this.dataPersistence.fetch(
    AlbumsActionTypes.LoadAlbums,
    {
      run: (action: LoadAlbums, state: AlbumsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new fromAlbumsActions.AlbumsLoaded([]);
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

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AlbumsPartialState>
  ) {}
}
