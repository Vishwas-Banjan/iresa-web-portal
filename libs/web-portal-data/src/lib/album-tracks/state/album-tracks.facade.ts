import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AlbumTracksPartialState } from './album-tracks.reducer';
import { albumTracksQuery } from './album-tracks.selectors';
import { LoadAlbumTracks } from './album-tracks.actions';

@Injectable()
export class AlbumTracksFacade {
  loaded$ = this.store.pipe(select(albumTracksQuery.getLoaded));
  allAlbumTracks$ = this.store.pipe(select(albumTracksQuery.getAllAlbumTracks));
  selectedAlbumTracks$ = this.store.pipe(
    select(albumTracksQuery.getSelectedAlbumTracks)
  );

  constructor(private store: Store<AlbumTracksPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadAlbumTracks());
  }
}
