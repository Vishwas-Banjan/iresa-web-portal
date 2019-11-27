import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PlaylistsFacade } from './states/playlists.facade';

@Injectable()
export class PlaylistTracksResolver implements Resolve<any> {
  constructor(private playlistFacade: PlaylistsFacade) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const playlistId = route.paramMap.get('playlistId');
    this.fetchPlaylistTracks(playlistId);
    return this.waitForDataToLoad();
  }

  fetchPlaylistTracks(playlistId) {
    this.playlistFacade.getPlaylistTracks(playlistId);
  }

  waitForDataToLoad(): Observable<any> {
    return this.playlistFacade.loaded$.pipe(
      filter(loaded => !!loaded),
      take(1)
    );
  }
}
