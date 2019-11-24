import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade } from '@iresa/web-portal-data';
import { Router } from '@angular/router';
import { SpotifyService } from '@iresa/ngx-spotify';

@Component({
  selector: 'iresa-portal-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationListComponent implements OnInit {
  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {}

  get stations$() {
    return this.authFacade.stations$;
  }

  getAuthURL(stationid) {
    return this.spotifyService.authURL(stationid);
  }
}
