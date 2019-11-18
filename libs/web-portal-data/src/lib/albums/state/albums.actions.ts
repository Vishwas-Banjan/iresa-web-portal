import { Action } from '@ngrx/store';

export enum AlbumsActionTypes {
  LoadAlbums = '[Albums] Load Albums',
  AlbumsLoaded = '[Albums] Albums Loaded',
  AlbumsLoadError = '[Albums] Albums Load Error',
  LoadAlbum = '[Albums] Load Album',
  AlbumLoaded = '[Albums] Album Loaded',
  AlbumLoadError = '[Albums] Album Load Error',
  ResetStates = '[Albums] Reset States'
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

export class ResetStates implements Action {
  readonly type = AlbumsActionTypes.ResetStates;
  constructor() {}
}

export type AlbumsAction =
  | LoadAlbums
  | AlbumsLoaded
  | AlbumsLoadError
  | ResetStates
  | LoadAlbum
  | AlbumLoaded
  | AlbumLoadError;

export const fromAlbumsActions = {
  LoadAlbums,
  AlbumsLoaded,
  AlbumsLoadError,
  LoadAlbum,
  AlbumLoaded,
  AlbumLoadError,
  ResetStates
};
