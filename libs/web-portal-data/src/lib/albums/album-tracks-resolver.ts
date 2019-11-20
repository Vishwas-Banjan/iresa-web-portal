import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AlbumsFacade } from './state/albums.facade';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumTracksResolver implements Resolve<any> {
  constructor(private albumFacade: AlbumsFacade) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const albumId = route.paramMap.get('albumId');
    const trackPos = route.paramMap.get('trackPos');

    this.fetchAlbumTracks(albumId, trackPos);
    return this.waitForDataToLoad();
  }

  fetchAlbumTracks(albumId, trackPos) {
    this.albumFacade.loadAlbumTracks({ albumId, trackPos });
  }

  waitForDataToLoad(): Observable<any> {
    return this.albumFacade.loaded$.pipe(
      filter(tracksLoaded => !!tracksLoaded),
      take(1)
    );
  }
}
