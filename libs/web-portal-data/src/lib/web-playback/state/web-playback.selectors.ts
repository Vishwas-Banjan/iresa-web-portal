import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WEB_PLAYBACK_FEATURE_KEY, WebPlaybackState } from './web-playback.reducer';

const getDashboardState = createFeatureSelector<WebPlaybackState>(
  WEB_PLAYBACK_FEATURE_KEY
);

const getSearchResults = createSelector(
  getDashboardState,
  (state: WebPlaybackState) => {
    return state.searchResults;
  }
);

export const webPlaybackQuery = {
  getSearchResults
};
