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
  AddToPlaylist
} from './playlists.actions';
import { AUTH_FEATURE_KEY } from '../../auth/state/auth.reducer';
import { map, switchMap } from 'rxjs/operators';
import { PlaylistsService } from './playlists.service';
import { SpotifyService } from '@iresa/ngx-spotify';

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
        const stationId = state[AUTH_FEATURE_KEY].selectedStationId;
        if (playlist) {
          if (playlist.type === 'favorite') {
            return this.spotifyService
              .getPlaylistTracks(playlist.id, { limit: 20 })
              .pipe(
                switchMap(tracks => {
                  tracks = tracks.items.map(item => {
                    const track = item.track;
                    return {
                      name: item.track.name,
                      id: track.id,
                      uri: track.uri,
                      images: track.album.images.slice(0, 1),
                      artists: this.playlistsService.toArtistNames(
                        track.artists
                      )
                    };
                  });
                  return this.playlistsService
                    .setSongList(stationId, tracks)
                    .pipe(
                      map(
                        resp =>
                          new fromPlaylistsActions.RefreshSongListSuccess()
                      )
                    );
                })
              );
          }
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
        const stationId = state[AUTH_FEATURE_KEY].selectedStationId;
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

  constructor(
    private actions$: Actions,
    private playlistsService: PlaylistsService,
    private spotifyService: SpotifyService,
    private dataPersistence: DataPersistence<PlaylistsPartialState>
  ) {}
}
