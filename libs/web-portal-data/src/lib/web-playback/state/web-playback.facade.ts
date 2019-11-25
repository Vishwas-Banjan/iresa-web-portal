import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { webPlaybackQuery } from './web-playback.selectors';
import { WebPlaybackPartialState } from './web-playback.reducer';
import { fromWebPlaybackActions } from './web-playback.actions';

@Injectable()
export class WebPlaybackFacade {
  queue$ = this.store.pipe(select(webPlaybackQuery.getQueue));
  playing$ = this.store.pipe(select(webPlaybackQuery.getPLaying));
  currPlayingTrack$ = this.store.pipe(
    select(webPlaybackQuery.getCurrPlayingTrack)
  );

  constructor(private store: Store<WebPlaybackPartialState>) {}

  setQueue(val) {
    this.store.dispatch(new fromWebPlaybackActions.SetQueue(val));
  }

  play(data) {
    this.store.dispatch(new fromWebPlaybackActions.Play(data));
  }

  setPlaying(val) {
    this.store.dispatch(new fromWebPlaybackActions.SetPlaying(val));
  }
}
