import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlbumsFacade } from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-album-track-list',
  templateUrl: './album-track-list.component.html',
  styleUrls: ['./album-track-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumTrackListComponent implements OnInit {
  constructor(private albumFacade: AlbumsFacade) {}

  ngOnInit() {}

  get albumTracks$() {
    return this.albumFacade.albumTracks$;
  }
}
