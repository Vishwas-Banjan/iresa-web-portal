import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutError = '[Auth] Logout Error'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
  constructor() {}
}

export class LogoutError implements Action {
  readonly type = AuthActionTypes.LogoutError;
  constructor() {}
}

export type AuthAction =
  | Login
  | LoginSuccess
  | Logout
  | LogoutSuccess
  | LogoutError;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginError,
  Logout,
  LogoutSuccess,
  LogoutError
};
