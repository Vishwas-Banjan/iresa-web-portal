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
export class PlaylistResolver implements Resolve<any> {
  constructor(private playlistFacade: PlaylistsFacade) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.fetchPlaylists();
    return this.waitForDataToLoad();
  }

  fetchPlaylists() {
    this.playlistFacade.loadAll();
  }

  waitForDataToLoad(): Observable<any> {
    return this.playlistFacade.loaded$.pipe(
      filter(loaded => !!loaded),
      take(1)
    );
  }
}
