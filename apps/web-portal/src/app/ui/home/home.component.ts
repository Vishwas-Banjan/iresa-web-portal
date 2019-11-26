import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlaylistsFacade } from '@iresa/web-portal-data';
import { of } from 'rxjs';

@Component({
  selector: 'iresa-portal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private plFacade: PlaylistsFacade) {}

  ngOnInit() {}

  get favPlaylist$() {
    return this.plFacade.favPlaylists$;
  }

  get customPlaylist$() {
    return this.plFacade.custPlaylists$;
  }
}
