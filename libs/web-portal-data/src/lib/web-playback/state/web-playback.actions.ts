import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  LoadDashboard = '[WebPlayback] Load Dashboard'
}

export class LoadDashboard implements Action {
  readonly type = WebPlaybackActionTypes.LoadDashboard;
}

export type WebPlaybackAction = LoadDashboard;

export const fromWebPlaybackActions = {
  LoadDashboard
};
