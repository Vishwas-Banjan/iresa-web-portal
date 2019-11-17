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

export const webPlaybackQuery = {
  getLoggedIn
};
