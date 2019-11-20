import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade, WebPlaybackFacade } from '@iresa/web-portal-data';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

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

  ngOnInit() {
    this.handleRouterEvent();
  }

  get menuItems$() {
    return this.dbFacade.menuItems$;
  }

  get product$() {
    return this.dbFacade.product$;
  }

  get loggedIn$() {
    return this.wpFacade.loggedIn$;
  }

  get loading$() {
    return this.dbFacade.loading$;
  }

  onMenuClick(menu) {
    this.dbFacade.setSelectedMenuItems(menu.value);
    this.router.navigate([menu.value]);
  }

  handleRouterEvent() {
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.dbFacade.setLoading(true);
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.dbFacade.setLoading(false);
    }
  }
}
