import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { WebPlaybackPartialState } from './web-playback.reducer';
import {
  WebPlaybackActionTypes,
  Search,
  fromWebPlaybackActions
} from './web-playback.actions';
import { of } from 'rxjs';
import { SpotifyService } from '@iresa/ngx-spotify';
import { map } from 'rxjs/operators';

@Injectable()
export class WebPlaybackEffects {
  @Effect() loadDashboard$ = this.dataPersistence.fetch(
    WebPlaybackActionTypes.Search,
    {
      run: (action: Search, state: WebPlaybackPartialState) => {
        const type = 'album,artist,track';
        return this.spotifyService
          .search(action.payload, type, { limit: 5 })
          .pipe(map(val => new fromWebPlaybackActions.SearchSuccess(val)));
      },

      onError: (action: Search, error) => {
        return new fromWebPlaybackActions.SearchError();
      }
    }
  );

  constructor(
    private actions$: Actions,
    private spotifyService: SpotifyService,
    private dataPersistence: DataPersistence<WebPlaybackPartialState>
  ) {}
}
