import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ALBUMS_FEATURE_KEY, AlbumsState } from './albums.reducer';

// Lookup the 'Albums' feature state managed by NgRx
const getAlbumsState = createFeatureSelector<AlbumsState>(ALBUMS_FEATURE_KEY);

const getLoaded = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.loaded
);
const getTracksLoaded = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.tracksLoaded
);
const getError = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.error
);

const getAllAlbums = createSelector(
  getAlbumsState,
  getLoaded,
  (state: AlbumsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);

const getAlbumTracks = createSelector(
  getAlbumsState,
  getTracksLoaded,
  (state: AlbumsState, isLoaded) => {
    return isLoaded ? state.trackList : null;
  }
);

export const albumsQuery = {
  getLoaded,
  getTracksLoaded,
  getError,
  getAllAlbums,
  getAlbumTracks
};
