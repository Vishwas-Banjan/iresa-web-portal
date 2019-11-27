import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlaylistsFacade } from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistDetailsComponent implements OnInit {
  constructor(private playlistFacade: PlaylistsFacade) {}

  ngOnInit() {}

  get playlist$() {
    return this.playlistFacade.tracks$;
  }
}
