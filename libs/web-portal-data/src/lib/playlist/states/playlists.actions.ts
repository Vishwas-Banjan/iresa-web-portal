import { Action } from '@ngrx/store';

export enum PlaylistsActionTypes {
  LoadPlaylists = '[Playlists] Load Playlists',
  PlaylistsLoaded = '[Playlists] Playlists Loaded',
  PlaylistsLoadError = '[Playlists] Playlists Load Error',
  SavePlaylist = '[Albums] Save Playlist',
  SavePlaylistError = '[Albums] Save Playlist Error',
  RefreshSongList = '[Albums] Refresh Song List',
  RefreshSongListSuccess = '[Albums] Refresh Song List Success',
  RefreshSongListError = '[Albums] Refresh Song List Error'
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

export class SavePlaylistError implements Action {
  readonly type = PlaylistsActionTypes.SavePlaylistError;
  constructor(public payload: any) {}
}

export class RefreshSongList implements Action {
  readonly type = PlaylistsActionTypes.RefreshSongList;
  constructor() {}
}

export class RefreshSongListSuccess implements Action {
  readonly type = PlaylistsActionTypes.RefreshSongListSuccess;
  constructor() {}
}

export class RefreshSongListError implements Action {
  readonly type = PlaylistsActionTypes.RefreshSongListError;
  constructor() {}
}

export type PlaylistsAction =
  | LoadPlaylists
  | PlaylistsLoaded
  | PlaylistsLoadError
  | SavePlaylist
  | SavePlaylistError
  | RefreshSongList
  | RefreshSongListSuccess
  | RefreshSongListError;

export const fromPlaylistsActions = {
  LoadPlaylists,
  PlaylistsLoaded,
  PlaylistsLoadError,
  SavePlaylist,
  SavePlaylistError,
  RefreshSongList,
  RefreshSongListSuccess,
  RefreshSongListError
};
