import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { StationsPartialState, STATIONS_FEATURE_KEY } from './stations.reducer';
import {
  LoadStations,
  StationsActionTypes,
  LoadStationDetails,
  fromStationsActions
} from './stations.actions';
import { StationsService } from './stations.service';
import { map } from 'rxjs/operators';

@Injectable()
export class StationsEffects {
  @Effect() loadStations$ = this.dataPersistence.fetch(
    StationsActionTypes.LoadStations,
    {
      run: (action: LoadStations, state: StationsPartialState) => {
        return this.stationsService
          .getStationsByUser(action.payload)
          .pipe(map(data => new fromStationsActions.StationsLoaded(data)));
      },

      onError: (action: LoadStations, error) => {
        console.error('Error', error);
        return new fromStationsActions.StationsLoadError(error);
      }
    }
  );

  @Effect() loadStation$ = this.dataPersistence.fetch(
    StationsActionTypes.LoadStationDetails,
    {
      run: (action: LoadStationDetails, state: StationsPartialState) => {
        const id = state[STATIONS_FEATURE_KEY].selectedId;
        return this.stationsService
          .getStationDetails(id)
          .pipe(
            map(data => new fromStationsActions.StationDetailsLoaded(data))
          );
      },

      onError: (action: LoadStationDetails, error) => {
        console.error('Error', error);
        return new fromStationsActions.StationDetailsLoadError();
      }
    }
  );

  constructor(
    private actions$: Actions,
    private stationsService: StationsService,
    private dataPersistence: DataPersistence<StationsPartialState>
  ) {}
}
