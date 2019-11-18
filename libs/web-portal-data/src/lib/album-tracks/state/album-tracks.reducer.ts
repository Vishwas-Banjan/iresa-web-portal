import {
  AlbumTracksAction,
  AlbumTracksActionTypes
} from './album-tracks.actions';

export const ALBUMTRACKS_FEATURE_KEY = 'albumTracks';

/**
 * Interface for the 'AlbumTracks' data used in
 *  - AlbumTracksState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AlbumTracksState {
  list: Entity[]; // list of AlbumTracks; analogous to a sql normalized table
  selectedId?: string | number; // which AlbumTracks record has been selected
  loaded: boolean; // has the AlbumTracks list been loaded
  error?: any; // last none error (if any)
}

export interface AlbumTracksPartialState {
  readonly [ALBUMTRACKS_FEATURE_KEY]: AlbumTracksState;
}

export const initialState: AlbumTracksState = {
  list: [],
  loaded: false
};

export function reducer(
  state: AlbumTracksState = initialState,
  action: AlbumTracksAction
): AlbumTracksState {
  switch (action.type) {
    case AlbumTracksActionTypes.AlbumTracksLoaded: {
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
