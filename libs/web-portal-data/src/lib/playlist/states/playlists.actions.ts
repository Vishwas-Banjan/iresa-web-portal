import { Action } from '@ngrx/store';

export enum PlaylistsActionTypes {
  LoadPlaylists = '[Playlists] Load Playlists',
  PlaylistsLoaded = '[Playlists] Playlists Loaded',
  PlaylistsLoadError = '[Playlists] Playlists Load Error',
  SavePlaylist = '[Albums] Save Playlist',
  SavePlaylistSuccess = '[Albums] Save Playlist Success',
  SavePlaylistError = '[Albums] Save Playlist Error'
}

export class LoadPlaylists implements Action {
  readonly type = PlaylistsActionTypes.LoadPlaylists;
}

export class PlaylistsLoadError implements Action {
  readonly type = PlaylistsActionTypes.PlaylistsLoadError;
  constructor(public payload: any) {}
}

export class PlaylistsLoaded implements Action {
  readonly type = PlaylistsActionTypes.PlaylistsLoaded;
  constructor(public payload: any[]) {}
}

export class SavePlaylist implements Action {
  readonly type = PlaylistsActionTypes.SavePlaylist;
  constructor(public payload: any) {}
}

export class SavePlaylistSuccess implements Action {
  readonly type = PlaylistsActionTypes.SavePlaylistSuccess;
  constructor() {}
}

export class SavePlaylistError implements Action {
  readonly type = PlaylistsActionTypes.SavePlaylistError;
  constructor(public payload: any) {}
}

export type PlaylistsAction =
  | LoadPlaylists
  | PlaylistsLoaded
  | PlaylistsLoadError
  | SavePlaylist
  | SavePlaylistSuccess
  | SavePlaylistError;

export const fromPlaylistsActions = {
  LoadPlaylists,
  PlaylistsLoaded,
  PlaylistsLoadError,
  SavePlaylist,
  SavePlaylistSuccess,
  SavePlaylistError
};
