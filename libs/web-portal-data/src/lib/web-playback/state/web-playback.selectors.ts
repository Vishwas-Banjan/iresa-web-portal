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

const getCurrPlayingTrack = createSelector(
  getWebPlaybackState,
  (state: WebPlaybackState) =>
    state.queue[state.position] ? state.queue[state.position] : {}
);

export const webPlaybackQuery = {
  getLoggedIn,
  getQueue,
  getCurrPlayingTrack
};
