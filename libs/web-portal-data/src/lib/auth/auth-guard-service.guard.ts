import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '@iresa/ngx-spotify';

@Injectable()
export class AuthGuardServiceGuard implements CanActivate {
  constructor(private spotifyService: SpotifyService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.spotifyService.getAuthToken()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
