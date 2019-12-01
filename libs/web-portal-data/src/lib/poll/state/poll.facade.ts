import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PollPartialState } from './poll.reducer';
import { pollQuery } from './poll.selectors';
import { LoadPoll } from './poll.actions';

@Injectable()
export class PollFacade {
  loaded$ = this.store.pipe(select(pollQuery.getLoaded));
  all$ = this.store.pipe(select(pollQuery.getAll));
  selectedPoll$ = this.store.pipe(select(pollQuery.getSelectedPoll));

  constructor(private store: Store<PollPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPoll());
  }
}
