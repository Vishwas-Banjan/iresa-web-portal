import {
  WebPlaybackAction,
  WebPlaybackActionTypes
} from './web-playback.actions';

export const WEB_PLAYBACK_FEATURE_KEY = 'webPlayback';

export interface WebPlaybackState {
  loggedIn: boolean;
  playing: boolean;
  queue: any[];
  position: number;
}

export interface WebPlaybackPartialState {
  readonly [WEB_PLAYBACK_FEATURE_KEY]: WebPlaybackState;
}

export const initialState: WebPlaybackState = {
  loggedIn: false,
  playing: false,
  queue: [],
  position: 0
};

export function reducer(
  state: WebPlaybackState = initialState,
  action: WebPlaybackAction
): WebPlaybackState {
  switch (action.type) {
    case WebPlaybackActionTypes.SetQueue: {
      state = {
        ...state,
        queue: action.payload,
        position: 0
      };
      break;
    }
  }
  return state;
}
