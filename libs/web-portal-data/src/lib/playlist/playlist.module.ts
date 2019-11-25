import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPlaylists from './states/playlists.reducer';
import { PlaylistsEffects } from './states/playlists.effects';
import { PlaylistsFacade } from './states/playlists.facade';
import { DataPersistence } from '@nrwl/angular';
import { PlaylistsService } from './states/playlists.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPlaylists.PLAYLISTS_FEATURE_KEY,
      fromPlaylists.reducer
    ),
    EffectsModule.forFeature([PlaylistsEffects])
  ],
  providers: [PlaylistsFacade, DataPersistence, PlaylistsService]
})
export class PlaylistDataModule {}
