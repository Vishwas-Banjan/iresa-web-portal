import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AuthPartialState } from './auth.reducer';
import {
  AuthActionTypes,
  Login,
  Logout,
  fromAuthActions
} from './auth.actions';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect() login$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: Login, state: AuthPartialState) => {
      return this.authService
        .login(action.payload)
        .pipe(map(data => new fromAuthActions.LoginSuccess(data)));
    },

    onError: (action: Login, error) => {
      console.error('Error', error);
      return new fromAuthActions.LoginError(error);
    }
  });

  @Effect() logout$ = this.dataPersistence.fetch(AuthActionTypes.Logout, {
    run: (action: Logout, state: AuthPartialState) => {
      this.router.navigateByUrl('/login');
      return new fromAuthActions.LogoutSuccess();
    },

    onError: (action: Logout, error) => {
      console.error('Error', error);
      return new fromAuthActions.LogoutError();
    }
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private dataPersistence: DataPersistence<AuthPartialState>
  ) {}
}
