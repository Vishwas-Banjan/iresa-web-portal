import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAlbumTracks from './state/album-tracks.reducer';
import { AlbumTracksEffects } from './state/album-tracks.effects';
import { AlbumTracksFacade } from './state/album-tracks.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAlbumTracks.ALBUMTRACKS_FEATURE_KEY,
      fromAlbumTracks.reducer
    ),
    EffectsModule.forFeature([AlbumTracksEffects])
  ],
  providers: [AlbumTracksFacade]
})
export class AlbumTracksModule {}
