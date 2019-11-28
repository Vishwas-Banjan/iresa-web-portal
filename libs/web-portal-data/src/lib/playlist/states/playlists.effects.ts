import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import {
  PlaylistsPartialState,
  PLAYLISTS_FEATURE_KEY
} from './playlists.reducer';
import {
  LoadPlaylists,
  PlaylistsActionTypes,
  SavePlaylist,
  fromPlaylistsActions,
  RefreshSongList,
  AddToPlaylist,
  GetPlaylistTracks
} from './playlists.actions';
import { map, switchMap } from 'rxjs/operators';
import { PlaylistsService } from './playlists.service';
import { STATIONS_FEATURE_KEY } from '../../stations/state/stations.reducer';

@Injectable()
export class PlaylistsEffects {
  @Effect() loadPlaylists$ = this.dataPersistence.fetch(
    PlaylistsActionTypes.LoadPlaylists,
    {
      run: (action: LoadPlaylists, state: PlaylistsPartialState) => {
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
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
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        return this.playlistsService
          .savePlaylist(stationId, action.payload)
          .pipe(map((data: any) => new fromPlaylistsActions.LoadPlaylists()));
      },

      undoAction: (action: SavePlaylist, error) => {
        return new fromPlaylistsActions.SavePlaylistError(error);
      }
    }
  );

  @Effect() refreshSongList$ = this.dataPersistence.pessimisticUpdate(
    PlaylistsActionTypes.RefreshSongList,
    {
      run: (action: RefreshSongList, state: PlaylistsPartialState) => {
        const playlists = state[PLAYLISTS_FEATURE_KEY].list;
        const playlist =
          playlists[Math.floor(Math.random() * playlists.length)];
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        if (playlist) {
          return this.playlistsService
            .getPlaylistTracks(stationId, playlist)
            .pipe(
              switchMap(tracks =>
                this.playlistsService
                  .setSongList(stationId, tracks)
                  .pipe(
                    map(
                      resp => new fromPlaylistsActions.RefreshSongListSuccess()
                    )
                  )
              )
            );
        }

        return new fromPlaylistsActions.RefreshSongListSuccess();
      },

      onError: (action: RefreshSongList, error) => {
        console.error('Error', error);
        return new fromPlaylistsActions.RefreshSongListError();
      }
    }
  );

  @Effect() addToPlaylist$ = this.dataPersistence.optimisticUpdate(
    PlaylistsActionTypes.AddToPlaylist,
    {
      run: (action: AddToPlaylist, state: PlaylistsPartialState) => {
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        const playlistId = action.payload.playlistId;
        const track = action.payload.track;
        return this.playlistsService
          .addToPlaylist(stationId, playlistId, track)
          .pipe(
            map((data: any) => new fromPlaylistsActions.AddToPlaylistSuccess())
          );
      },

      undoAction: (action: AddToPlaylist, error) => {
        return new fromPlaylistsActions.AddToPlaylistError();
      }
    }
  );

  @Effect() getPlaylistTracks$ = this.dataPersistence.fetch(
    PlaylistsActionTypes.GetPlaylistTracks,
    {
      run: (action: GetPlaylistTracks, state: PlaylistsPartialState) => {
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        const playlist = state[PLAYLISTS_FEATURE_KEY].list.find(
          item => item.recordId === action.payload
        );
        return this.playlistsService
          .getPlaylistTracks(stationId, playlist)
          .pipe(
            map(
              tracks =>
                new fromPlaylistsActions.GetPlaylistTracksSuccess({
                  ...playlist,
                  tracks
                })
            )
          );
      },

      onError: (action: GetPlaylistTracks, error) => {
        console.error('Error', error);
        return new fromPlaylistsActions.GetPlaylistTracksError();
      }
    }
  );

  constructor(
    private actions$: Actions,
    private playlistsService: PlaylistsService,
    private dataPersistence: DataPersistence<PlaylistsPartialState>
  ) {}
}
