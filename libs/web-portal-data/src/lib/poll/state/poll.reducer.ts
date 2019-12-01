import { PollAction, PollActionTypes } from './poll.actions';

export const POLL_FEATURE_KEY = 'poll';

/**
 * Interface for the 'Poll' data used in
 *  - PollState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface PollState {
  list: any[]; // list of Poll; analogous to a sql normalized table
  selectedId?: string | number; // which Poll record has been selected
  loaded: boolean; // has the Poll list been loaded
  error?: any; // last none error (if any)
}

export interface PollPartialState {
  readonly [POLL_FEATURE_KEY]: PollState;
}

export const initialState: PollState = {
  list: [],
  loaded: false
};

export function reducer(
  state: PollState = initialState,
  action: PollAction
): PollState {
  switch (action.type) {
    case PollActionTypes.PollLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
