import { Action } from '@ngrx/store';

export enum PollActionTypes {
  LoadPoll = '[Poll] Load Poll',
  PollLoaded = '[Poll] Poll Loaded',
  PollLoadError = '[Poll] Poll Load Error'
}

export class LoadPoll implements Action {
  readonly type = PollActionTypes.LoadPoll;
}

export class PollLoadError implements Action {
  readonly type = PollActionTypes.PollLoadError;
  constructor(public payload: any) {}
}

export class PollLoaded implements Action {
  readonly type = PollActionTypes.PollLoaded;
  constructor(public payload: any[]) {}
}

export type PollAction = LoadPoll | PollLoaded | PollLoadError;

export const fromPollActions = {
  LoadPoll,
  PollLoaded,
  PollLoadError
};
