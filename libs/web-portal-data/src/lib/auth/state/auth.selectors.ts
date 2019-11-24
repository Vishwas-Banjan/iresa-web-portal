import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const getLoggedIn = createSelector(
  getAuthState,
  (state: AuthState) => state.loggedIn
);

const getStations = createSelector(
  getAuthState,
  (state: AuthState) => state.stations
);

const getLoading = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

export const authQuery = {
  getLoggedIn,
  getStations,
  getLoading
};
