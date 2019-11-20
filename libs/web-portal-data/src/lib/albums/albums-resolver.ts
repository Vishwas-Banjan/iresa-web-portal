import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { AlbumsFacade } from './state/albums.facade';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumsResolver implements Resolve<any> {
  constructor(private albumFacade: AlbumsFacade) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const albumId = route.paramMap.get('albumId');
    const artistId = route.paramMap.get('artistId');

    const res = albumId
      ? this.fetchAlbum(albumId)
      : this.fetchArtistAlbums(artistId);
    return this.waitForDataToLoad();
  }

  fetchArtistAlbums(artistId: any) {
    this.albumFacade.loadAll(artistId);
    return artistId;
  }

  fetchAlbum(albumId: any) {
    this.albumFacade.loadAlbum(albumId);
    return albumId;
  }

  waitForDataToLoad(): Observable<any> {
    return this.albumFacade.loaded$.pipe(
      filter(loaded => !!loaded),
      take(1)
    );
  }
}
