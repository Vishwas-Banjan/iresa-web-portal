import { WebPlaybackAction } from './web-playback.actions';

export const WEB_PLAYBACK_FEATURE_KEY = 'webPlayback';

export interface WebPlaybackState {
  searchResults: any[];
}

export interface WebPlaybackPartialState {
  readonly [WEB_PLAYBACK_FEATURE_KEY]: WebPlaybackState;
}

export const initialState: WebPlaybackState = {
  searchResults: []
};

export function reducer(
  state: WebPlaybackState = initialState,
  action: WebPlaybackAction
): WebPlaybackState {
  switch (
    action.type
    // case DashboardActionTypes.DashboardLoaded: {
    // state = {
    //   ...state,
    //   list: action.payload,
    //   loaded: true
    // };
    //   break;
    // }
  ) {
  }
  return state;
}
