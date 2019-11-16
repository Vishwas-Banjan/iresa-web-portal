import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade } from '@iresa/web-portal-data';

@Component({
  selector: 'iresa-portal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(private dbFacade: DashboardFacade) {}

  ngOnInit() {}

  get menuItems$() {
    return this.dbFacade.menuItems$;
  }

  get product$() {
    return this.dbFacade.product$;
  }
}
