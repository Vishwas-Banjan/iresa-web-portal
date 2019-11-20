import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { webPlaybackQuery } from './web-playback.selectors';
import { WebPlaybackPartialState } from './web-playback.reducer';
import { fromWebPlaybackActions } from './web-playback.actions';

@Injectable()
export class WebPlaybackFacade {
  loggedIn$ = this.store.pipe(select(webPlaybackQuery.getLoggedIn));
  queue$ = this.store.pipe(select(webPlaybackQuery.getQueue));
  currPlayingTrack$ = this.store.pipe(
    select(webPlaybackQuery.getCurrPlayingTrack)
  );

  constructor(private store: Store<WebPlaybackPartialState>) {}

  setLoggedIn(val) {
    this.store.dispatch(new fromWebPlaybackActions.SetLoggedIn(val));
  }

  setQueue(val) {
    this.store.dispatch(new fromWebPlaybackActions.SetQueue(val));
  }

  play(data) {
    this.store.dispatch(new fromWebPlaybackActions.Play(data));
  }
}
