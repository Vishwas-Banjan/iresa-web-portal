import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  SetLoggedIn = '[WebPlayback] Set Logged In',
  SetQueue = '[WebPlayback] Set Queue',
  Play = '[WebPlayback] Play',
  PlaySuccess = '[WebPlayback] Play Success',
  PlayError = '[WebPlayback] Play Error'
}

export class SetLoggedIn implements Action {
  readonly type = WebPlaybackActionTypes.SetLoggedIn;
  constructor(public payload: any) {}
}

export class SetQueue implements Action {
  readonly type = WebPlaybackActionTypes.SetQueue;
  constructor(public payload: any) {}
}

export class Play implements Action {
  readonly type = WebPlaybackActionTypes.Play;
  constructor(public payload: any) {}
}

export class PlaySuccess implements Action {
  readonly type = WebPlaybackActionTypes.PlaySuccess;
  constructor() {}
}

export class PlayError implements Action {
  readonly type = WebPlaybackActionTypes.PlayError;
  constructor() {}
}

export type WebPlaybackAction =
  | SetLoggedIn
  | SetQueue
  | Play
  | PlaySuccess
  | PlayError;

export const fromWebPlaybackActions = {
  SetLoggedIn,
  SetQueue,
  Play,
  PlaySuccess,
  PlayError
};
