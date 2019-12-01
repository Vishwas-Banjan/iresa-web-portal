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
    case WebPlaybackActionTypes.SetPlaying: {
      state = {
        ...state,
        playing: action.payload
      };
      break;
    }
    case WebPlaybackActionTypes.Next: {
      state = {
        ...state,
        position: state.position + 1
      };
      break;
    }
    case WebPlaybackActionTypes.Prev: {
      state = {
        ...state,
        position: state.position > 0 ? state.position - 1 : state.position
      };
      break;
    }
  }
  return state;
}
