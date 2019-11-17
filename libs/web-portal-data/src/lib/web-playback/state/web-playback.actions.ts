import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  SetLoggedIn = '[WebPlayback] Set Logged In'
}

export class SetLoggedIn implements Action {
  readonly type = WebPlaybackActionTypes.SetLoggedIn;
  constructor(public payload: any) {}
}

export type WebPlaybackAction = SetLoggedIn;

export const fromWebPlaybackActions = {
  SetLoggedIn
};
