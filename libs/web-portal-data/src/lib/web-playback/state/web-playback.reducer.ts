import {
  WebPlaybackAction,
  WebPlaybackActionTypes
} from './web-playback.actions';

export const WEB_PLAYBACK_FEATURE_KEY = 'webPlayback';

export interface WebPlaybackState {
  loggedIn: boolean;
  searchItems: any[];
  searchLoading: boolean;
}

export interface WebPlaybackPartialState {
  readonly [WEB_PLAYBACK_FEATURE_KEY]: WebPlaybackState;
}

export const initialState: WebPlaybackState = {
  loggedIn: false,
  searchItems: [],
  searchLoading: false
};

export function reducer(
  state: WebPlaybackState = initialState,
  action: WebPlaybackAction
): WebPlaybackState {
  switch (action.type) {
    case WebPlaybackActionTypes.SetLoggedIn: {
      state = {
        ...state,
        loggedIn: action.payload
      };
      break;
    }
    case WebPlaybackActionTypes.Search: {
      state = {
        ...state,
        searchLoading: true
      };
      break;
    }
    case WebPlaybackActionTypes.SearchSuccess: {
      state = {
        ...state,
        searchLoading: false,
        searchItems: action.payload
      };
      break;
    }
    case WebPlaybackActionTypes.SearchError: {
      state = {
        ...state,
        searchLoading: false,
        searchItems: []
      };
      break;
    }
  }
  return state;
}
