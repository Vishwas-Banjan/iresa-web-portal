import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { StationsFacade } from './state/stations.facade';

@Injectable()
export class StationResolver implements Resolve<any> {
  constructor(private stationsFacade: StationsFacade) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.fetchStation();
    return this.waitForDataToLoad();
  }

  fetchStation() {
    this.stationsFacade.loadStationDetails();
  }

  waitForDataToLoad(): Observable<any> {
    return this.stationsFacade.stationLoaded$.pipe(
      filter(loaded => !!loaded),
      take(1)
    );
  }
}
