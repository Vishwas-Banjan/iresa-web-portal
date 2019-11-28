import { StationsAction, StationsActionTypes } from './stations.actions';

export const STATIONS_FEATURE_KEY = 'stations';

/**
 * Interface for the 'Stations' data used in
 *  - StationsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface StationsState {
  list: any[]; // list of Stations; analogous to a sql normalized table
  selectedId?: string | number; // which Stations record has been selected
  loaded: boolean; // has the Stations list been loaded
  error?: any; // last none error (if any)
  stationLoaded: boolean;
  stationDetails: any;
}

export interface StationsPartialState {
  readonly [STATIONS_FEATURE_KEY]: StationsState;
}

export const initialState: StationsState = {
  list: [],
  loaded: false,
  stationLoaded: false,
  stationDetails: null
};

export function reducer(
  state: StationsState = initialState,
  action: StationsAction
): StationsState {
  switch (action.type) {
    case StationsActionTypes.StationsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case StationsActionTypes.SetSelectedId: {
      state = {
        ...state,
        selectedId: action.payload
      };
      break;
    }
    case StationsActionTypes.LoadStationDetails: {
      state = {
        ...state,
        stationLoaded: false
      };
      break;
    }
    case StationsActionTypes.StationDetailsLoaded: {
      state = {
        ...state,
        stationLoaded: true,
        stationDetails: action.payload
      };
      break;
    }
  }
  return state;
}
