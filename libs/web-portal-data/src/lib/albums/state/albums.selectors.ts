import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ALBUMS_FEATURE_KEY, AlbumsState } from './albums.reducer';

// Lookup the 'Albums' feature state managed by NgRx
const getAlbumsState = createFeatureSelector<AlbumsState>(ALBUMS_FEATURE_KEY);

const getLoaded = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.loaded
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
const getSelectedId = createSelector(
  getAlbumsState,
  (state: AlbumsState) => state.selectedId
);
const getSelectedAlbums = createSelector(
  getAllAlbums,
  getSelectedId,
  (albums, id) => {
    const result = albums.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const albumsQuery = {
  getLoaded,
  getError,
  getAllAlbums,
  getSelectedAlbums
};
