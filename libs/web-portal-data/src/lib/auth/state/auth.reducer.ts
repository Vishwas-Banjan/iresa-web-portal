import { AuthAction, AuthActionTypes } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface AuthState {
  loggedIn: boolean;
  user: any;
  loading: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  loading: false
};

export function reducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login: {
      state = {
        ...state,
        loading: true
      };
      break;
    }
    case AuthActionTypes.LoginSuccess: {
      state = {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        loading: false
      };
      break;
    }
    case AuthActionTypes.LogoutSuccess: {
      state = {
        ...state,
        loggedIn: false,
        user: null
      };
      break;
    }
  }
  return state;
}
