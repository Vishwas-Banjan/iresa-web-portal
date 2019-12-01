import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  SetQueue = '[WebPlayback] Set Queue',
  Play = '[WebPlayback] Play',
  PlaySuccess = '[WebPlayback] Play Success',
  PlayError = '[WebPlayback] Play Error',
  SetPlaying = '[WebPlayback] Set Playing',
  Next = '[WebPlayback] Next',
  Prev = '[WebPlayback] Prev',
  RefreshQueue = '[WebPlayback] Refresh Queue',
  RefreshQueueSuccess = '[WebPlayback] Refresh Queue Success',
  RefreshQueueError = '[WebPlayback] Refresh Queue Error',
  UpdateRemoteQueue = '[WebPlayback] Update Remote Queue',
  UpdateRemoteQueueSuccess = '[WebPlayback] Update Remote Queue Success',
  UpdateRemoteQueueError = '[WebPlayback] Update Remote Queue Error',
  SetVol = '[WebPlayback] Set Vol',
  ToggleMute = '[WebPlayback] Toggle Mute'
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

export class SetPlaying implements Action {
  readonly type = WebPlaybackActionTypes.SetPlaying;
  constructor(public payload: any) {}
}

export class Next implements Action {
  readonly type = WebPlaybackActionTypes.Next;
  constructor() {}
}

export class Prev implements Action {
  readonly type = WebPlaybackActionTypes.Prev;
  constructor() {}
}

export class RefreshQueue implements Action {
  readonly type = WebPlaybackActionTypes.RefreshQueue;
  constructor() {}
}

export class RefreshQueueSuccess implements Action {
  readonly type = WebPlaybackActionTypes.RefreshQueueSuccess;
  constructor(public payload: any) {}
}

export class RefreshQueueError implements Action {
  readonly type = WebPlaybackActionTypes.RefreshQueueError;
  constructor() {}
}

export class UpdateRemoteQueue implements Action {
  readonly type = WebPlaybackActionTypes.UpdateRemoteQueue;
  constructor(public payload: any) {}
}

export class UpdateRemoteQueueSuccess implements Action {
  readonly type = WebPlaybackActionTypes.UpdateRemoteQueueSuccess;
  constructor() {}
}

export class UpdateRemoteQueueError implements Action {
  readonly type = WebPlaybackActionTypes.UpdateRemoteQueueError;
  constructor() {}
}

export class SetVol implements Action {
  readonly type = WebPlaybackActionTypes.SetVol;
  constructor(public payload: any) {}
}

export class ToggleMute implements Action {
  readonly type = WebPlaybackActionTypes.ToggleMute;
  constructor() {}
}

export type WebPlaybackAction =
  | SetQueue
  | Play
  | PlaySuccess
  | PlayError
  | SetPlaying
  | Next
  | Prev
  | RefreshQueue
  | RefreshQueueSuccess
  | RefreshQueueError
  | UpdateRemoteQueue
  | UpdateRemoteQueueSuccess
  | UpdateRemoteQueueError
  | SetVol
  | ToggleMute;

export const fromWebPlaybackActions = {
  SetQueue,
  Play,
  PlaySuccess,
  PlayError,
  SetPlaying,
  Next,
  Prev,
  RefreshQueue,
  RefreshQueueSuccess,
  RefreshQueueError,
  UpdateRemoteQueue,
  UpdateRemoteQueueSuccess,
  UpdateRemoteQueueError,
  SetVol,
  ToggleMute
};
