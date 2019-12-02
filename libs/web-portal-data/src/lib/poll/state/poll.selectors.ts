import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POLL_FEATURE_KEY, PollState } from './poll.reducer';

// Lookup the 'Poll' feature state managed by NgRx
const getPollState = createFeatureSelector<PollState>(POLL_FEATURE_KEY);

const getLoaded = createSelector(
  getPollState,
  (state: PollState) => state.loaded
);
const getError = createSelector(
  getPollState,
  (state: PollState) => state.error
);

const getAll = createSelector(
  getPollState,
  getLoaded,
  (state: PollState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPollState,
  (state: PollState) => state.selectedId
);
const getSelectedPoll = createSelector(
  getAll,
  getSelectedId,
  (poll, id) => {
    const result = poll.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const pollQuery = {
  getLoaded,
  getError,
  getAll,
  getSelectedPoll
};
