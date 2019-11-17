import { Action } from '@ngrx/store';

export enum WebPlaybackActionTypes {
  SetLoggedIn = '[WebPlayback] Set Logged In',
  Search = '[WebPlayback] Search',
  SearchSuccess = '[WebPlayback] Search Success',
  SearchError = '[WebPlayback] Search Error'
}

export class SetLoggedIn implements Action {
  readonly type = WebPlaybackActionTypes.SetLoggedIn;
  constructor(public payload: any) {}
}

export class Search implements Action {
  readonly type = WebPlaybackActionTypes.Search;
  constructor(public payload: any) {}
}

export class SearchSuccess implements Action {
  readonly type = WebPlaybackActionTypes.SearchSuccess;
  constructor(public payload: any) {}
}

export class SearchError implements Action {
  readonly type = WebPlaybackActionTypes.SearchError;
  constructor() {}
}

export type WebPlaybackAction =
  | SetLoggedIn
  | Search
  | SearchSuccess
  | SearchError;

export const fromWebPlaybackActions = {
  SetLoggedIn,
  Search,
  SearchSuccess,
  SearchError
};
