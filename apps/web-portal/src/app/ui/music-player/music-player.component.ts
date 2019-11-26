import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgZone,
  OnDestroy,
  HostListener
} from '@angular/core';
import { WindowRef, ScriptLoaderService } from '@iresa/shared/utilities';
import { SpotifyService, SpotifyPlaybackService } from '@iresa/ngx-spotify';
import { MusicPlayer, PlayerStates } from './music-player.config';
import { WebPlaybackFacade } from '@iresa/web-portal-data';
import { SubSink } from 'subsink';
import { filter } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material';

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
    private slService: ScriptLoaderService,
    private wpFacade: WebPlaybackFacade
  ) {}

  get currPlaying$() {
    return this.wpFacade.currPlayingTrack$;
  }

  get playing$() {
    return this.wpFacade.playing$;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.ngOnDestroy();
  }

  ngOnInit() {
    this.initOutSideFn();
    this.onSpotifyReady();
    this.onQueueUpdate();
    this.loadScript();
  }

  loadScript() {
    this.slService
      .load({
        src: 'https://sdk.scdn.co/spotify-player.js',
        name: 'spotify-player.js',
        loaded: false
      })
      .subscribe();
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
    this.musicPlayerCtrl.handleStateChanges = this.handleStateChanges;
  }

  getAuthToken = () => {
    this.musicPlayerCtrl.authToken = this.ngZone.run(() =>
      this.spotifyService.getAuthToken()
    );
  };

  play() {}

  handleStateChanges = (states: PlayerStates) => {
    // paused
    if (states.restrictions && states.restrictions.disallow_pausing_reasons) {
      if (
        states.restrictions.disallow_pausing_reasons.find(
          res => res === 'already_paused'
        )
      ) {
        this.wpFacade.setPlaying(false);
      }
    }
    if (states.restrictions && states.restrictions.disallow_resuming_reasons) {
      if (
        states.restrictions.disallow_resuming_reasons.find(
          res => res === 'not_paused'
        )
      ) {
        this.wpFacade.setPlaying(true);
      }
    }
  };

  onVolChange(e: MatSliderChange) {
    this.musicPlayerCtrl.musicPlayer.setVolume(e.value);
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
        // console.log(state);
        window['MusicPlayer'].handleStateChanges(state);
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
