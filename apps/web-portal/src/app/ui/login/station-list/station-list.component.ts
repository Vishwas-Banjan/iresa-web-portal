import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade } from '@iresa/web-portal-data';
import { Router } from '@angular/router';
import { SpotifyService } from '@iresa/ngx-spotify';
import { FirestoreService } from '@iresa/firestore';

@Component({
  selector: 'iresa-portal-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationListComponent implements OnInit {
  constructor(
    private authFacade: AuthFacade,
    private firestore: FirestoreService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {}

  get stations$() {
    return this.authFacade.stations$;
  }

  getAuthURL(stationId) {
    const idToken = this.firestore.getIdToken();
    return this.spotifyService.authURL(JSON.stringify({ stationId, idToken }));
  }
}
