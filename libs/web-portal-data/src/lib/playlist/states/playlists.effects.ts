import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { PlaylistsPartialState } from './playlists.reducer';
import {
  LoadPlaylists,
  PlaylistsActionTypes,
  SavePlaylist,
  fromPlaylistsActions
} from './playlists.actions';
import { AUTH_FEATURE_KEY } from '../../auth/state/auth.reducer';
import { map } from 'rxjs/operators';
import { PlaylistsService } from './playlists.service';

@Injectable()
export class PlaylistsEffects {
  @Effect() loadPlaylists$ = this.dataPersistence.fetch(
    PlaylistsActionTypes.LoadPlaylists,
    {
      run: (action: LoadPlaylists, state: PlaylistsPartialState) => {
        const stationId = state[AUTH_FEATURE_KEY].selectedStationId;
        return this.playlistsService
          .getPlaylists(stationId)
          .pipe(map(data => new fromPlaylistsActions.PlaylistsLoaded(data)));
      },

      onError: (action: LoadPlaylists, error) => {
        console.error('Error', error);
        return new fromPlaylistsActions.PlaylistsLoadError(error);
      }
    }
  );

  @Effect() savePlaylist$ = this.dataPersistence.optimisticUpdate(
    PlaylistsActionTypes.SavePlaylist,
    {
      run: (action: SavePlaylist, state: PlaylistsPartialState) => {
        const stationId = state[AUTH_FEATURE_KEY].selectedStationId;
        return this.playlistsService
          .savePlaylist(stationId, action.payload)
          .pipe(
            map((data: any) => new fromPlaylistsActions.SavePlaylistSuccess())
          );
      },

      undoAction: (action: SavePlaylist, error) => {
        return new fromPlaylistsActions.SavePlaylistError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private playlistsService: PlaylistsService,
    private dataPersistence: DataPersistence<PlaylistsPartialState>
  ) {}
}
