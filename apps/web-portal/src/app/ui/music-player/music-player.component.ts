import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgZone,
  OnDestroy,
  HostListener
} from '@angular/core';
import { WindowRef } from '@iresa/shared/utilities';
import { SpotifyService, SpotifyPlaybackService } from '@iresa/ngx-spotify';
import { MusicPlayer } from './music-player.config';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { SubSink } from 'subsink';
import { filter } from 'rxjs/operators';

declare var Spotify: any;

@Component({
  selector: 'iresa-portal-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  private musicPlayerCtrl: MusicPlayer;

  subs = new SubSink();

  constructor(
    private winRef: WindowRef,
    private spotifyService: SpotifyService,
    private ngZone: NgZone,
    private spotifyPlayback: SpotifyPlaybackService,
    private wpFacade: WebPlaybackFacade
  ) {}

  get currPlaying$() {
    return this.wpFacade.currPlayingTrack$;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.ngOnDestroy();
  }

  ngOnInit() {
    this.initOutSideFn();
    this.onSpotifyReady();
    this.onQueueUpdate();
  }

  onQueueUpdate() {
    this.subs.add(
      this.wpFacade.queue$.pipe(filter(q => q.length > 0)).subscribe(q => {
        const authToken = this.musicPlayerCtrl.authToken;
        const device_id = this.musicPlayerCtrl.device_id;
        const URIs = q.map(item => item.uri);
        this.wpFacade.play({ authToken, device_id, URIs });
      })
    );
  }

  ngOnDestroy() {
    this.disconnectPlayer();
    this.winRef.nativeWindow.MusicPlayer = null;
    this.subs.unsubscribe();
  }

  disconnectPlayer() {
    this.musicPlayerCtrl.musicPlayer.disconnect();
  }

  initOutSideFn() {
    this.winRef.nativeWindow.MusicPlayer =
      this.winRef.nativeWindow.MusicPlayer || {};
    this.musicPlayerCtrl = this.winRef.nativeWindow.MusicPlayer;
    this.musicPlayerCtrl.getAuthToken = this.getAuthToken;
  }

  getAuthToken = () => {
    this.musicPlayerCtrl.authToken = this.ngZone.run(() =>
      this.spotifyService.getAuthToken()
    );
  };

  play() {
    this.spotifyPlayback
      .play(this.musicPlayerCtrl.authToken, this.musicPlayerCtrl.device_id, [
        'spotify:track:4HHMe2itoN6xeZx5NyaZks'
      ])
      .subscribe();
  }

  onSpotifyReady() {
    this.winRef.nativeWindow.onSpotifyPlayerAPIReady = () => {
      window['MusicPlayer'].getAuthToken();
      const token = window['MusicPlayer'].authToken;
      const player = new Spotify.Player({
        name: 'Iresa Web Playback',
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        window['MusicPlayer'].musicPlayer = player;
        window['MusicPlayer'].device_id = device_id;
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }
}
