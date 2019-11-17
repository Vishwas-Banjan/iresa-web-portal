import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  Search = '[Dashboard] Search',
  SearchSuccess = '[Dashboard] Search Success',
  SearchError = '[Dashboard] Search Error'
}

export class Search implements Action {
  readonly type = DashboardActionTypes.Search;
  constructor(public payload: any) {}
}

export class SearchSuccess implements Action {
  readonly type = DashboardActionTypes.SearchSuccess;
  constructor(public payload: any) {}
}

export class SearchError implements Action {
  readonly type = DashboardActionTypes.SearchError;
  constructor() {}
}

export type DashboardAction = Search
| SearchSuccess
| SearchError;

export const fromDashboardActions = {
  Search,
  SearchSuccess,
  SearchError
};
