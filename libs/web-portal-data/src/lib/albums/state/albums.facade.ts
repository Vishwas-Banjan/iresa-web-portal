import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AlbumsPartialState } from './albums.reducer';
import { albumsQuery } from './albums.selectors';
import { fromAlbumsActions } from './albums.actions';

@Injectable()
export class AlbumsFacade {
  loaded$ = this.store.pipe(select(albumsQuery.getLoaded));
  tracksLoaded$ = this.store.pipe(select(albumsQuery.getTracksLoaded));
  allAlbums$ = this.store.pipe(select(albumsQuery.getAllAlbums));
  albumTracks$ = this.store.pipe(select(albumsQuery.getAlbumTracks));

  constructor(private store: Store<AlbumsPartialState>) {}

  loadAll(artistId) {
    this.store.dispatch(new fromAlbumsActions.LoadAlbums(artistId));
  }

  loadAlbum(albumId) {
    this.store.dispatch(new fromAlbumsActions.LoadAlbum(albumId));
  }

  loadAlbumTracks(data) {
    this.store.dispatch(new fromAlbumsActions.LoadAlbumTracks(data));
  }

  loadPlaylistTracks(data) {
    this.store.dispatch(new fromAlbumsActions.LoadPlaylistTracks(data));
  }
}
