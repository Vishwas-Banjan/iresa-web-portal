import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { WebPlaybackPartialState } from './web-playback.reducer';
import {
  WebPlaybackActionTypes,
  fromWebPlaybackActions,
  Play
} from './web-playback.actions';
import { of } from 'rxjs';
import { SpotifyService, SpotifyPlaybackService } from '@iresa/ngx-spotify';
import { map } from 'rxjs/operators';

@Injectable()
export class WebPlaybackEffects {
  @Effect() play$ = this.dataPersistence.fetch(WebPlaybackActionTypes.Play, {
    run: (action: Play, state: WebPlaybackPartialState) => {
      const data = action.payload;
      return this.playbackService
        .play(data.authToken, data.device_id, data.URIs)
        .pipe(map(val => new fromWebPlaybackActions.PlaySuccess()));
    },

    onError: (action: Play, error) => {
      return new fromWebPlaybackActions.PlayError();
    }
  });

  constructor(
    private actions$: Actions,
    private playbackService: SpotifyPlaybackService,
    private dataPersistence: DataPersistence<WebPlaybackPartialState>
  ) {}
}
