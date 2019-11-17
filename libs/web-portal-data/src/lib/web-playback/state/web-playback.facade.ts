import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { webPlaybackQuery } from './web-playback.selectors';
import { WebPlaybackPartialState } from './web-playback.reducer';

@Injectable()
export class WebPlaybackFacade {
  searchResults$ = this.store.pipe(select(webPlaybackQuery.getSearchResults));

  constructor(private store: Store<WebPlaybackPartialState>) {}

  loadAll() {
    // this.store.dispatch(new LoadDashboard());
  }
}
