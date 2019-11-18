import { Action } from '@ngrx/store';
import { Entity } from './album-tracks.reducer';

export enum AlbumTracksActionTypes {
  LoadAlbumTracks = '[AlbumTracks] Load AlbumTracks',
  AlbumTracksLoaded = '[AlbumTracks] AlbumTracks Loaded',
  AlbumTracksLoadError = '[AlbumTracks] AlbumTracks Load Error'
}

export class LoadAlbumTracks implements Action {
  readonly type = AlbumTracksActionTypes.LoadAlbumTracks;
}

export class AlbumTracksLoadError implements Action {
  readonly type = AlbumTracksActionTypes.AlbumTracksLoadError;
  constructor(public payload: any) {}
}

export class AlbumTracksLoaded implements Action {
  readonly type = AlbumTracksActionTypes.AlbumTracksLoaded;
  constructor(public payload: Entity[]) {}
}

export type AlbumTracksAction =
  | LoadAlbumTracks
  | AlbumTracksLoaded
  | AlbumTracksLoadError;

export const fromAlbumTracksActions = {
  LoadAlbumTracks,
  AlbumTracksLoaded,
  AlbumTracksLoadError
};
