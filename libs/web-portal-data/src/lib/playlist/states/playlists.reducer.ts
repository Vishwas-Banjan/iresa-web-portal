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
  prevIdx: number;
  loaded: boolean; // has the Playlists list been loaded
  error?: any; // last none error (if any),
  tracks: any;
  tracksLoaded: boolean;
}

export interface PlaylistsPartialState {
  readonly [PLAYLISTS_FEATURE_KEY]: PlaylistsState;
}

export const initialState: PlaylistsState = {
  list: [],
  prevIdx: -1,
  loaded: false,
  tracks: null,
  tracksLoaded: false
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
    case PlaylistsActionTypes.GetPlaylistTracks: {
      state = {
        ...state,
        tracksLoaded: false,
        tracks: null
      };
      break;
    }
    case PlaylistsActionTypes.GetPlaylistTracksSuccess: {
      state = {
        ...state,
        tracks: action.payload,
        tracksLoaded: true
      };
      break;
    }
    case PlaylistsActionTypes.DeletePlaylistTrackSuccess: {
      state = {
        ...state,
        tracks: {
          ...state.tracks,
          tracks: state.tracks.tracks.filter(t => t.recordId !== action.payload)
        }
      };
      break;
    }
    case PlaylistsActionTypes.RefreshSongListSuccess: {
      state = {
        ...state,
        prevIdx: action.payload ? action.payload.prevIdx : state.prevIdx
      };
      break;
    }
  }
  return state;
}
