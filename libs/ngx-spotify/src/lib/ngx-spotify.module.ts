import { NgModule, ModuleWithProviders } from '@angular/core';
import { SpotifyConfig } from './spotify-config';
import { SpotifyService, SpotifyConfigService } from './spotify.service';
import { SpotifyPlaybackService } from './spotify-playback.service';

@NgModule()
export class NgxSpotifyModule {
  static forRoot(config: SpotifyConfig): ModuleWithProviders {
    return {
      ngModule: NgxSpotifyModule,
      providers: [
        SpotifyService,
        SpotifyPlaybackService,
        {
          provide: SpotifyConfigService,
          useValue: config
        }
      ]
    };
  }
}
