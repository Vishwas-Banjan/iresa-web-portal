import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  Search = '[Dashboard] Search',
  SearchSuccess = '[Dashboard] Search Success',
  SearchError = '[Dashboard] Search Error',
  SetSelectedMenuItems = '[Dashboard] Set Selected Menu Items'
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

export class SetSelectedMenuItems implements Action {
  readonly type = DashboardActionTypes.SetSelectedMenuItems;
  constructor(public payload: any) {}
}

export type DashboardAction =
  | Search
  | SearchSuccess
  | SearchError
  | SetSelectedMenuItems;

export const fromDashboardActions = {
  Search,
  SearchSuccess,
  SearchError,
  SetSelectedMenuItems
};
