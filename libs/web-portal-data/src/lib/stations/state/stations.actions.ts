import { Action } from '@ngrx/store';

export enum StationsActionTypes {
  LoadStations = '[Stations] Load Stations',
  StationsLoaded = '[Stations] Stations Loaded',
  StationsLoadError = '[Stations] Stations Load Error',
  SetSelectedId = '[Stations] Set Selected Id',
  LoadStationDetails = '[Stations] Load Station Details',
  StationDetailsLoaded = '[Stations] Station Details Loaded',
  StationDetailsLoadError = '[Stations] Station Details Load Error',
  UpdateStationDetails = '[Stations] Update Station Details',
  StationDetailsUpdateError = '[Stations] Station Details Update Error'
}

export class LoadStations implements Action {
  readonly type = StationsActionTypes.LoadStations;
  constructor(public payload: any) {}
}

export class StationsLoadError implements Action {
  readonly type = StationsActionTypes.StationsLoadError;
  constructor(public payload: any) {}
}

export class StationsLoaded implements Action {
  readonly type = StationsActionTypes.StationsLoaded;
  constructor(public payload: any) {}
}

export class SetSelectedId implements Action {
  readonly type = StationsActionTypes.SetSelectedId;
  constructor(public payload) {}
}

export class LoadStationDetails implements Action {
  readonly type = StationsActionTypes.LoadStationDetails;
}

export class StationDetailsLoaded implements Action {
  readonly type = StationsActionTypes.StationDetailsLoaded;
  constructor(public payload) {}
}

export class StationDetailsLoadError implements Action {
  readonly type = StationsActionTypes.StationDetailsLoadError;
  constructor() {}
}

export class UpdateStationDetails implements Action {
  readonly type = StationsActionTypes.UpdateStationDetails;
  constructor(public payload) {}
}

export class StationDetailsUpdateError implements Action {
  readonly type = StationsActionTypes.StationDetailsUpdateError;
  constructor() {}
}

export type StationsAction =
  | LoadStations
  | StationsLoaded
  | StationsLoadError
  | SetSelectedId
  | LoadStationDetails
  | StationDetailsLoaded
  | StationDetailsLoadError
  | UpdateStationDetails
  | StationDetailsUpdateError;

export const fromStationsActions = {
  LoadStations,
  StationsLoaded,
  StationsLoadError,
  SetSelectedId,
  LoadStationDetails,
  StationDetailsLoaded,
  StationDetailsLoadError,
  UpdateStationDetails,
  StationDetailsUpdateError
};
