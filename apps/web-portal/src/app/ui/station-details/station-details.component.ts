import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StationsFacade } from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationDetailsComponent implements OnInit {
  constructor(private stations: StationsFacade) {}

  ngOnInit() {}

  get stationDetails$() {
    return this.stations.stationDetails$;
  }
}
