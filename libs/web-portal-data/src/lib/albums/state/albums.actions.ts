import { Action } from '@ngrx/store';

export enum AlbumsActionTypes {
  LoadAlbums = '[Albums] Load Albums',
  AlbumsLoaded = '[Albums] Albums Loaded',
  AlbumsLoadError = '[Albums] Albums Load Error',
  ResetAlbumsLoaded = '[Albums] Reset Albums Loaded',
  LoadAlbum = '[Albums] Load Album',
  AlbumLoaded = '[Albums] Album Loaded',
  AlbumLoadError = '[Albums] Album Load Error',
  LoadAlbumTracks = '[Albums] Load Album Tracks',
  AlbumTracksLoaded = '[Albums] Album Tracks Loaded',
  AlbumTracksLoadError = '[Albums] Album Tracks Load Error',
  SetAlbumTracks = '[Albums] Set Album Tracks'
}

export class LoadAlbums implements Action {
  readonly type = AlbumsActionTypes.LoadAlbums;
  constructor(public payload: any) {}
}

export class AlbumsLoadError implements Action {
  readonly type = AlbumsActionTypes.AlbumsLoadError;
  constructor(public payload: any) {}
}

export class AlbumsLoaded implements Action {
  readonly type = AlbumsActionTypes.AlbumsLoaded;
  constructor(public payload: any) {}
}

export class ResetAlbumsLoaded implements Action {
  readonly type = AlbumsActionTypes.ResetAlbumsLoaded;
  constructor() {}
}

export class LoadAlbum implements Action {
  readonly type = AlbumsActionTypes.LoadAlbum;
  constructor(public payload: any) {}
}

export class AlbumLoadError implements Action {
  readonly type = AlbumsActionTypes.AlbumLoadError;
  constructor(public payload: any) {}
}

export class AlbumLoaded implements Action {
  readonly type = AlbumsActionTypes.AlbumLoaded;
  constructor(public payload: any) {}
}

export class LoadAlbumTracks implements Action {
  readonly type = AlbumsActionTypes.LoadAlbumTracks;
  constructor(public payload: any) {}
}

export class AlbumTracksLoadError implements Action {
  readonly type = AlbumsActionTypes.AlbumTracksLoadError;
  constructor(public payload: any) {}
}

export class AlbumTracksLoaded implements Action {
  readonly type = AlbumsActionTypes.AlbumTracksLoaded;
  constructor(public payload: any) {}
}

export class SetAlbumTracks implements Action {
  readonly type = AlbumsActionTypes.SetAlbumTracks;
  constructor(public payload: any) {}
}

export type AlbumsAction =
  | LoadAlbums
  | AlbumsLoaded
  | AlbumsLoadError
  | ResetAlbumsLoaded
  | LoadAlbum
  | AlbumLoaded
  | AlbumLoadError
  | LoadAlbumTracks
  | AlbumTracksLoadError
  | AlbumTracksLoaded
  | SetAlbumTracks;

export const fromAlbumsActions = {
  LoadAlbums,
  AlbumsLoaded,
  AlbumsLoadError,
  ResetAlbumsLoaded,
  LoadAlbum,
  AlbumLoaded,
  AlbumLoadError,
  LoadAlbumTracks,
  AlbumTracksLoadError,
  AlbumTracksLoaded,
  SetAlbumTracks
};
