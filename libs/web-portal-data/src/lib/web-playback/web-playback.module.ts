import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromWebPlayback from './state/web-playback.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WebPlaybackEffects } from './state/web-playback.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWebPlayback.WEB_PLAYBACK_FEATURE_KEY,
      fromWebPlayback.reducer
    ),
    EffectsModule.forFeature([WebPlaybackEffects])
  ]
})
export class WebPlaybackModule { }
