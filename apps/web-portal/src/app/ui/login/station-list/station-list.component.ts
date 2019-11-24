import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'iresa-portal-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
