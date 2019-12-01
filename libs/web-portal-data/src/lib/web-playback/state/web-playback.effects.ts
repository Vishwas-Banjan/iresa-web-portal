import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { WebPlaybackPartialState } from './web-playback.reducer';
import {
  WebPlaybackActionTypes,
  fromWebPlaybackActions,
  Play,
  RefreshQueue,
  UpdateRemoteQueue,
  UpdateRemoteQueueSuccess
} from './web-playback.actions';
import { SpotifyPlaybackService } from '@iresa/ngx-spotify';
import { map, switchMap } from 'rxjs/operators';
import { WebPlaybackService } from './web-playback.service';
import { STATIONS_FEATURE_KEY } from '../../stations/state/stations.reducer';

@Injectable()
export class WebPlaybackEffects {
  @Effect() play$ = this.dataPersistence.fetch(WebPlaybackActionTypes.Play, {
    run: (action: Play, state: WebPlaybackPartialState) => {
      const data = action.payload;
      return this.spotifyService
        .play(data.authToken, data.device_id, data.URIs)
        .pipe(map(val => new fromWebPlaybackActions.PlaySuccess()));
    },

    onError: (action: Play, error) => {
      return new fromWebPlaybackActions.PlayError();
    }
  });

  @Effect() refreshQueue$ = this.dataPersistence.fetch(
    WebPlaybackActionTypes.RefreshQueue,
    {
      run: (action: RefreshQueue, state: WebPlaybackPartialState) => {
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        return this.playbackService
          .getFavSongList(stationId)
          .pipe(map(list => new fromWebPlaybackActions.SetQueue(list)));
      },

      onError: (action: RefreshQueue, error) => {
        return new fromWebPlaybackActions.PlayError();
      }
    }
  );

  @Effect() updateRemoteQueue$ = this.dataPersistence.pessimisticUpdate(
    WebPlaybackActionTypes.UpdateRemoteQueue,
    {
      run: (action: UpdateRemoteQueue, state: WebPlaybackPartialState) => {
        const stationId = state[STATIONS_FEATURE_KEY].selectedId;
        return this.playbackService.clearQueue(stationId).pipe(
          switchMap(s =>
            this.playbackService.addToQueue(stationId, action.payload)
          ),
          map(data => new UpdateRemoteQueueSuccess())
        );
      },

      onError: (action: UpdateRemoteQueue, error) => {
        console.log(error);
        return new fromWebPlaybackActions.UpdateRemoteQueueError();
      }
    }
  );

  constructor(
    private actions$: Actions,
    private spotifyService: SpotifyPlaybackService,
    private playbackService: WebPlaybackService,
    private dataPersistence: DataPersistence<WebPlaybackPartialState>
  ) {}
}
