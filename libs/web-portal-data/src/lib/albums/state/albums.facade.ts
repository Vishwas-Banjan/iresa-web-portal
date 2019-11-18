import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AlbumsPartialState } from './albums.reducer';
import { albumsQuery } from './albums.selectors';
import { fromAlbumsActions } from './albums.actions';

@Injectable()
export class AlbumsFacade {
  loaded$ = this.store.pipe(select(albumsQuery.getLoaded));
  allAlbums$ = this.store.pipe(select(albumsQuery.getAllAlbums));
  selectedAlbums$ = this.store.pipe(select(albumsQuery.getSelectedAlbums));

  constructor(private store: Store<AlbumsPartialState>) {}

  loadAll(artistId) {
    this.store.dispatch(new fromAlbumsActions.LoadAlbums(artistId));
  }

  loadAlbum(albumId) {
    this.store.dispatch(new fromAlbumsActions.LoadAlbum(albumId));
  }

  resetStates() {
    this.store.dispatch(new fromAlbumsActions.ResetStates());
  }
}
