import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const getLoggedIn = createSelector(
  getAuthState,
  (state: AuthState) => {
    return {
      loggedIn: state.loggedIn,
      user: state.user
    };
  }
);

const getLoading = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

export const authQuery = {
  getLoggedIn,
  getLoading
};
