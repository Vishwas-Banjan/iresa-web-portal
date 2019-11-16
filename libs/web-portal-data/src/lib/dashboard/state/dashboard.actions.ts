import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  LoadDashboard = '[Dashboard] Load Dashboard'
}

export class LoadDashboard implements Action {
  readonly type = DashboardActionTypes.LoadDashboard;
}

export type DashboardAction = LoadDashboard;

export const fromDashboardActions = {
  LoadDashboard
};
