import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ALBUMTRACKS_FEATURE_KEY,
  AlbumTracksState
} from './album-tracks.reducer';

// Lookup the 'AlbumTracks' feature state managed by NgRx
const getAlbumTracksState = createFeatureSelector<AlbumTracksState>(
  ALBUMTRACKS_FEATURE_KEY
);

const getLoaded = createSelector(
  getAlbumTracksState,
  (state: AlbumTracksState) => state.loaded
);
const getError = createSelector(
  getAlbumTracksState,
  (state: AlbumTracksState) => state.error
);

const getAllAlbumTracks = createSelector(
  getAlbumTracksState,
  getLoaded,
  (state: AlbumTracksState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getAlbumTracksState,
  (state: AlbumTracksState) => state.selectedId
);
const getSelectedAlbumTracks = createSelector(
  getAllAlbumTracks,
  getSelectedId,
  (albumTracks, id) => {
    const result = albumTracks.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const albumTracksQuery = {
  getLoaded,
  getError,
  getAllAlbumTracks,
  getSelectedAlbumTracks
};
