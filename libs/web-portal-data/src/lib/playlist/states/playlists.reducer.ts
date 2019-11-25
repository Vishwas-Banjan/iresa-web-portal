import { PlaylistsAction, PlaylistsActionTypes } from './playlists.actions';

export const PLAYLISTS_FEATURE_KEY = 'playlists';

/**
 * Interface for the 'Playlists' data used in
 *  - PlaylistsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface PlaylistsState {
  list: any[]; // list of Playlists; analogous to a sql normalized table
  selectedId?: string | number; // which Playlists record has been selected
  loaded: boolean; // has the Playlists list been loaded
  error?: any; // last none error (if any)
}

export interface PlaylistsPartialState {
  readonly [PLAYLISTS_FEATURE_KEY]: PlaylistsState;
}

export const initialState: PlaylistsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: PlaylistsState = initialState,
  action: PlaylistsAction
): PlaylistsState {
  switch (action.type) {
    case PlaylistsActionTypes.PlaylistsLoaded: {
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
