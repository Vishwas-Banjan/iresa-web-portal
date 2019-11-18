import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AlbumTracksPartialState } from './album-tracks.reducer';
import {
  LoadAlbumTracks,
  AlbumTracksLoaded,
  AlbumTracksLoadError,
  AlbumTracksActionTypes
} from './album-tracks.actions';

@Injectable()
export class AlbumTracksEffects {
  @Effect() loadAlbumTracks$ = this.dataPersistence.fetch(
    AlbumTracksActionTypes.LoadAlbumTracks,
    {
      run: (action: LoadAlbumTracks, state: AlbumTracksPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new AlbumTracksLoaded([]);
      },

      onError: (action: LoadAlbumTracks, error) => {
        console.error('Error', error);
        return new AlbumTracksLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AlbumTracksPartialState>
  ) {}
}
