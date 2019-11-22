import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  SetQueue = '[WebPlayback] Set Queue',
  Play = '[WebPlayback] Play',
  PlaySuccess = '[WebPlayback] Play Success',
  PlayError = '[WebPlayback] Play Error'
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

export type WebPlaybackAction = SetQueue | Play | PlaySuccess | PlayError;

export const fromWebPlaybackActions = {
  SetQueue,
  Play,
  PlaySuccess,
  PlayError
};
