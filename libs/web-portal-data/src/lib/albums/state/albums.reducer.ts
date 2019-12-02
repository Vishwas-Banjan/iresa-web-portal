import { AlbumsAction, AlbumsActionTypes } from './albums.actions';

export const ALBUMS_FEATURE_KEY = 'albums';

/**
 * Interface for the 'Albums' data used in
 *  - AlbumsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

export interface AlbumsState {
  useSample: boolean;
  list: any[]; // list of Albums; analogous to a sql normalized table
  selectedId?: string | number; // which Albums record has been selected
  loaded: boolean; // has the Albums list been loaded
  error?: any; // last none error (if any)
  trackList: any;
  tracksLoaded: boolean;
  trackPos: number;
}

export interface AlbumsPartialState {
  readonly [ALBUMS_FEATURE_KEY]: AlbumsState;
}

export const initialState: AlbumsState = {
  useSample: false,
  list: [],
  loaded: false,
  trackList: null,
  tracksLoaded: false,
  trackPos: -1
};

export function reducer(
  state: AlbumsState = initialState,
  action: AlbumsAction
): AlbumsState {
  switch (action.type) {
    case AlbumsActionTypes.LoadAlbums: {
      state = {
        ...state,
        loaded: false,
        list: []
      };
      break;
    }
    case AlbumsActionTypes.AlbumsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case AlbumsActionTypes.LoadAlbum: {
      state = {
        ...state,
        loaded: false,
        list: []
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
    case AlbumsActionTypes.LoadAlbumTracks: {
      state = {
        ...state,
        tracksLoaded: false,
        trackList: null
      };
      break;
    }
    case AlbumsActionTypes.AlbumTracksLoaded: {
      state = {
        ...state,
        trackList: action.payload.tracks,
        tracksLoaded: true,
        selectedId: action.payload.albumId
      };
      break;
    }
    case AlbumsActionTypes.SetAlbumTracks: {
      state = {
        ...state,
        selectedId: action.payload.album.id,
        trackList: action.payload.album,
        tracksLoaded: true,
        trackPos: action.payload.trackPos ? action.payload.trackPos : -1
      };
      break;
    }
  }
  return state;
}
