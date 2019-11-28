import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { StationsPartialState } from './stations.reducer';
import { stationsQuery } from './stations.selectors';
import { fromStationsActions } from './stations.actions';

@Injectable()
export class StationsFacade {
  loaded$ = this.store.pipe(select(stationsQuery.getLoaded));
  allStations$ = this.store.pipe(select(stationsQuery.getAllStations));
  stationLoaded$ = this.store.pipe(select(stationsQuery.getStationLoaded));
  stationDetails$ = this.store.pipe(select(stationsQuery.getStationDetails));

  constructor(private store: Store<StationsPartialState>) {}

  loadAll(id) {
    this.store.dispatch(new fromStationsActions.LoadStations(id));
  }

  setSelectedId(id) {
    this.store.dispatch(new fromStationsActions.SetSelectedId(id));
  }

  loadStationDetails() {
    this.store.dispatch(new fromStationsActions.LoadStationDetails());
  }

  updateStationDetails(data) {
    this.store.dispatch(new fromStationsActions.UpdateStationDetails(data));
  }
}
