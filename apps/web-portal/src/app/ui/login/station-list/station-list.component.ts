import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StationsFacade } from '@iresa/web-portal-data';
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
    private stationFacade: StationsFacade,
    private firestore: FirestoreService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {}

  get stations$() {
    return this.stationFacade.allStations$;
  }

  getAuthURL(stationId) {
    const idToken = this.firestore.getIdToken();
    return this.spotifyService.authURL(JSON.stringify({ stationId, idToken }));
  }
}
