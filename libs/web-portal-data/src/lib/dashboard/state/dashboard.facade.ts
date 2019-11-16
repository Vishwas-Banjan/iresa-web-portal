import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { DashboardPartialState } from './dashboard.reducer';
import { dashboardQuery } from './dashboard.selectors';
import { LoadDashboard } from './dashboard.actions';

@Injectable()
export class DashboardFacade {
  menuItems$ = this.store.pipe(select(dashboardQuery.getMenuItems));
  product$ = this.store.pipe(select(dashboardQuery.getProduct));

  constructor(private store: Store<DashboardPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadDashboard());
  }
}
