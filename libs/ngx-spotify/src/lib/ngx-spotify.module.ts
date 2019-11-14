import { NgModule, ModuleWithProviders } from '@angular/core';
import { SpotifyConfig } from './spotify-config';
import { SpotifyService, SpotifyConfigService } from './spotify.service';

@NgModule()
export class NgxSpotifyModule {
  static forRoot(config: SpotifyConfig): ModuleWithProviders {
    return {
      ngModule: NgxSpotifyModule,
      providers: [
        SpotifyService,
        {
          provide: SpotifyConfigService,
          useValue: config
        }
      ]
    };
  }
}
