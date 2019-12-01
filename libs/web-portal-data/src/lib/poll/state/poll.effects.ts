import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { PollPartialState } from './poll.reducer';
import {
  LoadPoll,
  PollLoaded,
  PollLoadError,
  PollActionTypes
} from './poll.actions';
import { PollService } from './poll.service';
import { map } from 'rxjs/operators';
import { STATIONS_FEATURE_KEY } from '../../stations/state/stations.reducer';

@Injectable()
export class PollEffects {
  @Effect() loadPoll$ = this.dataPersistence.fetch(PollActionTypes.LoadPoll, {
    run: (action: LoadPoll, state: PollPartialState) => {
      const stationId = state[STATIONS_FEATURE_KEY].selectedId;
      return this.pollService
        .getSongList(stationId)
        .pipe(map(list => new PollLoaded(list)));
    },

    onError: (action: LoadPoll, error) => {
      console.error('Error', error);
      return new PollLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private pollService: PollService,
    private dataPersistence: DataPersistence<PollPartialState>
  ) {}
}
