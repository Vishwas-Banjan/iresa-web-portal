import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { DashboardFacade, AuthFacade } from '@iresa/web-portal-data';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { SpotifyService } from '@iresa/ngx-spotify';

@Component({
  selector: 'iresa-portal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  @ViewChild('pageContent', { static: false }) pageContent: ElementRef;
  constructor(
    private dbFacade: DashboardFacade,
    private auth: AuthFacade,
    private router: Router,
    private spotify: SpotifyService
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
      this.pageContent.nativeElement.scrollTo(0, 0);
    }
  }

  logout() {
    this.spotify.invalidAuthToken();
    this.auth.logout();
  }
}
