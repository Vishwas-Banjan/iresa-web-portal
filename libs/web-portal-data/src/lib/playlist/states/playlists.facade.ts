import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PlaylistsPartialState } from './playlists.reducer';
import { playlistsQuery } from './playlists.selectors';
import { fromPlaylistsActions } from './playlists.actions';

@Injectable()
export class PlaylistsFacade {
  loaded$ = this.store.pipe(select(playlistsQuery.getLoaded));
  favPlaylists$ = this.store.pipe(select(playlistsQuery.getFavPlaylists));

  constructor(private store: Store<PlaylistsPartialState>) {}

  loadAll() {
    this.store.dispatch(new fromPlaylistsActions.LoadPlaylists());
  }

  savePlaylist(data) {
    this.store.dispatch(new fromPlaylistsActions.SavePlaylist(data));
  }
}
