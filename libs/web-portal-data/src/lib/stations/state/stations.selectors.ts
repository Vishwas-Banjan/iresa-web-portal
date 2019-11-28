import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STATIONS_FEATURE_KEY, StationsState } from './stations.reducer';

// Lookup the 'Stations' feature state managed by NgRx
const getStationsState = createFeatureSelector<StationsState>(
  STATIONS_FEATURE_KEY
);

const getLoaded = createSelector(
  getStationsState,
  (state: StationsState) => state.loaded
);
const getError = createSelector(
  getStationsState,
  (state: StationsState) => state.error
);

const getAllStations = createSelector(
  getStationsState,
  getLoaded,
  (state: StationsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);

const getStationLoaded = createSelector(
  getStationsState,
  (state: StationsState) => state.stationLoaded
);

const getStationDetails = createSelector(
  getStationsState,
  (state: StationsState) => state.stationDetails
);

export const stationsQuery = {
  getLoaded,
  getError,
  getAllStations,
  getStationLoaded,
  getStationDetails
};
