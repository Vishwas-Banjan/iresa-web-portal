import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { DashboardPartialState } from './dashboard.reducer';
import { dashboardQuery } from './dashboard.selectors';
import { fromDashboardActions } from './dashboard.actions';

@Injectable()
export class DashboardFacade {
  menuItems$ = this.store.pipe(select(dashboardQuery.getMenuItems));
  product$ = this.store.pipe(select(dashboardQuery.getProduct));
  searchResults$ = this.store.pipe(select(dashboardQuery.getSearchResults));

  constructor(private store: Store<DashboardPartialState>) {}

  search(val) {
    this.store.dispatch(new fromDashboardActions.Search(val));
  }
}
