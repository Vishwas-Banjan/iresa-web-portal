import { AlbumsAction, AlbumsActionTypes } from './albums.actions';

export const ALBUMS_FEATURE_KEY = 'albums';

/**
 * Interface for the 'Albums' data used in
 *  - AlbumsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface AlbumsState {
  list: any[]; // list of Albums; analogous to a sql normalized table
  selectedId?: string | number; // which Albums record has been selected
  loaded: boolean; // has the Albums list been loaded
  error?: any; // last none error (if any)
}

export interface AlbumsPartialState {
  readonly [ALBUMS_FEATURE_KEY]: AlbumsState;
}

export const initialState: AlbumsState = {
  list: [],
  loaded: false
};

export function reducer(
  state: AlbumsState = initialState,
  action: AlbumsAction
): AlbumsState {
  switch (action.type) {
    case AlbumsActionTypes.AlbumsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case AlbumsActionTypes.AlbumLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case AlbumsActionTypes.ResetStates: {
      state = {
        ...initialState
      };
      break;
    }
  }
  return state;
}
