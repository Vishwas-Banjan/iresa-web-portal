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
  loading$ = this.store.pipe(select(dashboardQuery.getLoading));

  constructor(private store: Store<DashboardPartialState>) {}

  search(val) {
    this.store.dispatch(new fromDashboardActions.Search(val));
  }

  setSelectedMenuItems(val) {
    this.store.dispatch(new fromDashboardActions.SetSelectedMenuItems(val));
  }

  setLoading(val) {
    this.store.dispatch(new fromDashboardActions.SetLoading(val));
  }

  getAlbumFromSearch(albumId) {
    return this.store.pipe(
      select(dashboardQuery.getAlbumFromSearch, { albumId })
    );
  }
}
