import { Action } from '@ngrx/store';

export enum PlaylistsActionTypes {
  LoadPlaylists = '[Playlists] Load Playlists',
  PlaylistsLoaded = '[Playlists] Playlists Loaded',
  PlaylistsLoadError = '[Playlists] Playlists Load Error',
  SavePlaylist = '[Albums] Save Playlist',
  SavePlaylistError = '[Albums] Save Playlist Error',
  RefreshSongList = '[Albums] Refresh Song List',
  RefreshSongListSuccess = '[Albums] Refresh Song List Success',
  RefreshSongListError = '[Albums] Refresh Song List Error',
  AddToPlaylist = '[Albums] Add To Playlist',
  AddToPlaylistSuccess = '[Albums] Add To Playlist Success',
  AddToPlaylistError = '[Albums] Add To Playlist Error',
  GetPlaylistTracks = '[Albums] Get Playlist Tracks',
  GetPlaylistTracksSuccess = '[Albums] Get Playlist Tracks Success',
  GetPlaylistTracksError = '[Albums] Get Playlist Tracks Error'
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

export class AddToPlaylist implements Action {
  readonly type = PlaylistsActionTypes.AddToPlaylist;
  constructor(public payload: any) {}
}

export class AddToPlaylistSuccess implements Action {
  readonly type = PlaylistsActionTypes.AddToPlaylistSuccess;
  constructor() {}
}

export class AddToPlaylistError implements Action {
  readonly type = PlaylistsActionTypes.AddToPlaylistError;
  constructor() {}
}

export class GetPlaylistTracks implements Action {
  readonly type = PlaylistsActionTypes.GetPlaylistTracks;
  constructor(public payload: any) {}
}

export class GetPlaylistTracksSuccess implements Action {
  readonly type = PlaylistsActionTypes.GetPlaylistTracksSuccess;
  constructor(public payload: any) {}
}

export class GetPlaylistTracksError implements Action {
  readonly type = PlaylistsActionTypes.GetPlaylistTracksError;
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
  | RefreshSongListError
  | AddToPlaylist
  | AddToPlaylistSuccess
  | AddToPlaylistError
  | GetPlaylistTracks
  | GetPlaylistTracksSuccess
  | GetPlaylistTracksError;

export const fromPlaylistsActions = {
  LoadPlaylists,
  PlaylistsLoaded,
  PlaylistsLoadError,
  SavePlaylist,
  SavePlaylistError,
  RefreshSongList,
  RefreshSongListSuccess,
  RefreshSongListError,
  AddToPlaylist,
  AddToPlaylistSuccess,
  AddToPlaylistError,
  GetPlaylistTracks,
  GetPlaylistTracksSuccess,
  GetPlaylistTracksError
};
