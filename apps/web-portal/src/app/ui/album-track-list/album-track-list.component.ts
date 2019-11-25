import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AlbumsFacade,
  WebPlaybackFacade,
  PlaylistsFacade
} from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-album-track-list',
  templateUrl: './album-track-list.component.html',
  styleUrls: ['./album-track-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumTrackListComponent implements OnInit {
  showSavePlaylist: boolean;
  constructor(
    private albumFacade: AlbumsFacade,
    private wpFacade: WebPlaybackFacade,
    private playlistFacade: PlaylistsFacade
  ) {}

  ngOnInit() {}

  get albumTracks$() {
    return this.albumFacade.albumTracks$;
  }

  playSong(track, album) {
    const data = { ...track, images: album.images };
    this.wpFacade.setQueue([data]);
  }

  savePlaylist(playlist) {
    this.playlistFacade.savePlaylist(playlist);
  }
}
