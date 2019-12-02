import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PlaylistsPartialState } from './playlists.reducer';
import { playlistsQuery } from './playlists.selectors';
import { fromPlaylistsActions } from './playlists.actions';

@Injectable()
export class PlaylistsFacade {
  loaded$ = this.store.pipe(select(playlistsQuery.getLoaded));
  favPlaylists$ = this.store.pipe(select(playlistsQuery.getFavPlaylists));
  custPlaylists$ = this.store.pipe(select(playlistsQuery.getCustPlaylists));
  tracks$ = this.store.pipe(select(playlistsQuery.getTracks));

  constructor(private store: Store<PlaylistsPartialState>) {}

  loadAll() {
    this.store.dispatch(new fromPlaylistsActions.LoadPlaylists());
  }

  savePlaylist(data) {
    this.store.dispatch(new fromPlaylistsActions.SavePlaylist(data));
  }

  refreshSongList() {
    this.store.dispatch(new fromPlaylistsActions.RefreshSongList());
  }

  addToPlaylist(data) {
    this.store.dispatch(new fromPlaylistsActions.AddToPlaylist(data));
  }

  getPlaylistTracks(data) {
    this.store.dispatch(new fromPlaylistsActions.GetPlaylistTracks(data));
  }

  deletePlaylistTrack(data) {
    this.store.dispatch(new fromPlaylistsActions.DeletePlaylistTrack(data));
  }
}
