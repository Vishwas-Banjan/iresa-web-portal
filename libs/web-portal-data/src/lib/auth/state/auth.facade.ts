import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AuthPartialState } from './auth.reducer';
import { fromAuthActions } from './auth.actions';
import { authQuery } from './auth.selectors';

@Injectable()
export class AuthFacade {
  loggedIn$ = this.store.pipe(select(authQuery.getLoggedIn));
  stations$ = this.store.pipe(select(authQuery.getStations));
  loading$ = this.store.pipe(select(authQuery.getLoading));

  constructor(private store: Store<AuthPartialState>) {}

  login({ email, password }) {
    this.store.dispatch(new fromAuthActions.Login({ email, password }));
  }
}
