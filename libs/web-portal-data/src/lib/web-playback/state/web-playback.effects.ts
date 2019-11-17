import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { WebPlaybackPartialState } from './web-playback.reducer';
import {
  WebPlaybackActionTypes,
  fromWebPlaybackActions
} from './web-playback.actions';
import { of } from 'rxjs';
import { SpotifyService } from '@iresa/ngx-spotify';
import { map } from 'rxjs/operators';

@Injectable()
export class WebPlaybackEffects {

  constructor(
    private actions$: Actions,
    private spotifyService: SpotifyService,
    private dataPersistence: DataPersistence<WebPlaybackPartialState>
  ) {}
}
