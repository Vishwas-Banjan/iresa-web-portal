import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade, WebPlaybackFacade } from '@iresa/web-portal-data';
import { Router } from '@angular/router';

@Component({
  selector: 'iresa-portal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(
    private dbFacade: DashboardFacade,
    private wpFacade: WebPlaybackFacade,
    private router: Router
  ) {}

  ngOnInit() {}

  get menuItems$() {
    return this.dbFacade.menuItems$;
  }

  get product$() {
    return this.dbFacade.product$;
  }

  get loggedIn$() {
    return this.wpFacade.loggedIn$;
  }

  onMenuClick(menu) {
    this.dbFacade.setSelectedMenuItems(menu.value);
    this.router.navigate([menu.value]);
  }
}
