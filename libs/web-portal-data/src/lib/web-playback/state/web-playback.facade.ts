import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { webPlaybackQuery } from './web-playback.selectors';
import { WebPlaybackPartialState } from './web-playback.reducer';
import { fromWebPlaybackActions } from './web-playback.actions';

@Injectable()
export class WebPlaybackFacade {
  searchResults$ = this.store.pipe(select(webPlaybackQuery.getSearchResults));
  loggedIn$ = this.store.pipe(select(webPlaybackQuery.getLoggedIn));

  constructor(private store: Store<WebPlaybackPartialState>) {}

  setLoggedIn(val) {
    this.store.dispatch(new fromWebPlaybackActions.SetLoggedIn(val));
  }

  search(val) {
    this.store.dispatch(new fromWebPlaybackActions.Search(val));
  }
}
