import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { DashboardPartialState } from './dashboard.reducer';
import {
  DashboardActionTypes,
  Search,
  fromDashboardActions
} from './dashboard.actions';
import { SpotifyService } from '@iresa/ngx-spotify';
import { map } from 'rxjs/operators';
import { timer, of } from 'rxjs';
import { results } from './config/search-results';
import { DashboardService } from './dashboard.service';


@Injectable()
export class DashboardEffects {
  @Effect() search$ = this.dataPersistence.fetch(
    DashboardActionTypes.Search,
    {
      run: (action: Search, state: DashboardPartialState) => {
        // const type = 'track,artist,album';
        // return this.spotifyService
        //   .search(action.payload, type, { limit: 2 })
        //   .pipe(map(val => new fromDashboardActions.SearchSuccess(val)));
        return of(results).pipe(
          map(val => {
            return new fromDashboardActions.SearchSuccess(this.dbService.toSearchResult(val));
          })
        );
      },

      onError: (action: Search, error) => {
        return new fromDashboardActions.SearchError();
      }
    }
  );

  constructor(
    private actions$: Actions,
    private spotifyService: SpotifyService,
    private dbService: DashboardService,
    private dataPersistence: DataPersistence<DashboardPartialState>
  ) {}
}
