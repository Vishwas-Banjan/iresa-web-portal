import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WindowRef } from '@iresa/shared/utilities';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { SpotifyService } from '@iresa/ngx-spotify';

@Component({
  selector: 'iresa-portal-playback-connect',
  templateUrl: './playback-connect.component.html',
  styleUrls: ['./playback-connect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaybackConnectComponent implements OnInit {
  constructor(
    private winRef: WindowRef,
    private wpFacade: WebPlaybackFacade,
    private spotifyServie: SpotifyService
  ) {}

  ngOnInit() {
    this.onLogin();
  }

  login() {
    this.spotifyServie.login().subscribe();
  }

  onLogin() {
    this.winRef.nativeWindow.onload = function() {
      const hash = window.location.hash;
      let loggedIn = false;
      if (window.location.search.substring(1).indexOf('error') !== -1) {
      } else if (hash) {
        const token = window.location.hash.split('&')[0].split('=')[1];
        localStorage.setItem('spotify-token', token);
        loggedIn = true;
      }
      // this.wpFacade.setLoggedIn(false);
    };
  }
}
