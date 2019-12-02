import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { webPlaybackQuery } from './web-playback.selectors';
import { WebPlaybackPartialState } from './web-playback.reducer';
import { fromWebPlaybackActions } from './web-playback.actions';

@Injectable()
export class WebPlaybackFacade {
  queue$ = this.store.pipe(select(webPlaybackQuery.getQueue));
  playing$ = this.store.pipe(select(webPlaybackQuery.getPlaying));
  endOfQueue$ = this.store.pipe(select(webPlaybackQuery.getEndOfQueue));
  currPlayingTrack$ = this.store.pipe(select(webPlaybackQuery.getCurrTrack));
  vol$ = this.store.pipe(select(webPlaybackQuery.getVol));
  position$ = this.store.pipe(select(webPlaybackQuery.getPosition));

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

  next() {
    this.store.dispatch(new fromWebPlaybackActions.Next());
  }

  prev() {
    this.store.dispatch(new fromWebPlaybackActions.Prev());
  }

  refreshQueue() {
    this.store.dispatch(new fromWebPlaybackActions.RefreshQueue());
  }

  updateRemoteQueue(data) {
    this.store.dispatch(new fromWebPlaybackActions.UpdateRemoteQueue(data));
  }

  toggleMute() {
    this.store.dispatch(new fromWebPlaybackActions.ToggleMute());
  }

  setVol(data) {
    this.store.dispatch(new fromWebPlaybackActions.SetVol(data));
  }
}
