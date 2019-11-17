import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { WebPlaybackPartialState } from './web-playback.reducer';

@Injectable()
export class WebPlaybackEffects {
  // @Effect() loadDashboard$ = this.dataPersistence.fetch(
  //   DashboardActionTypes.LoadDashboard,
  //   {
  //     run: (action: LoadDashboard, state: DashboardPartialState) => {
  //       // Your custom REST 'load' logic goes here. For now just return an empty list...
  //       return new DashboardLoaded([]);
  //     },

  //     onError: (action: LoadDashboard, error) => {
  //       console.error('Error', error);
  //       return new DashboardLoadError(error);
  //     }
  //   }
  // );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<WebPlaybackPartialState>
  ) {}
}
