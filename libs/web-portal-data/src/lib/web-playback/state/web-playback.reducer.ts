import {
  WebPlaybackAction,
  WebPlaybackActionTypes
} from './web-playback.actions';

export const WEB_PLAYBACK_FEATURE_KEY = 'webPlayback';

export interface WebPlaybackState {
  loggedIn: boolean;
}

export interface WebPlaybackPartialState {
  readonly [WEB_PLAYBACK_FEATURE_KEY]: WebPlaybackState;
}

export const initialState: WebPlaybackState = {
  loggedIn: false
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
  }
  return state;
}
