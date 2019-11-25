import { Injectable } from '@angular/core';
import { SearchDataModel } from './config/search-data.model';

@Injectable()
export class DashboardService {
  constructor() {}

  toSearchResult(data: SearchDataModel): any[] {
    // add images for track
    data.tracks.items.map(item => {
      if (!item.images && item.album.images) {
        item.images = item.album.images;
      }
    });
    return [
      ...data.tracks.items,
      ...data.artists.items,
      ...data.albums.items,
      ...data.playlists.items
    ];
  }
}
