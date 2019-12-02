import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WEB_PLAYBACK_FEATURE_KEY,
  WebPlaybackState
} from './web-playback.reducer';

const getWebPlaybackState = createFeatureSelector<WebPlaybackState>(
  WEB_PLAYBACK_FEATURE_KEY
);

const getLoggedIn = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) => state.loggedIn
);

const getQueue = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) => state.queue
);

const getPlaying = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) => state.playing
);

const getCurrTrack = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) =>
    state.position >= 0 && state.position < state.queue.length
      ? state.queue[state.position]
      : null
);

const getEndOfQueue = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) =>
    state.queue.length > 0 && state.position >= state.queue.length
);

const getVol = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) => state.vol
);

const getPosition = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) => state.position
);

export const webPlaybackQuery = {
  getLoggedIn,
  getQueue,
  getPlaying,
  getCurrTrack,
  getEndOfQueue,
  getVol,
  getPosition
};
