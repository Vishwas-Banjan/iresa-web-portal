import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AuthPartialState } from './auth.reducer';
import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginError
} from './auth.actions';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect() login$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: Login, state: AuthPartialState) => {
      return this.authService.login(action.payload).pipe(
        switchMap((auth: any) => this.authService.getStationsByUser(auth.user)),
        map(data => new LoginSuccess(data))
      );
    },

    onError: (action: Login, error) => {
      console.error('Error', error);
      return new LoginError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private dataPersistence: DataPersistence<AuthPartialState>
  ) {}
}
