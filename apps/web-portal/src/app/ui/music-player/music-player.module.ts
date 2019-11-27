import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatButtonModule
} from '@angular/material';
import { LoadImageModule, ScriptLoaderModule } from '@iresa/shared/utilities';
import { PlaylistDataModule } from '@iresa/web-portal-data';

@NgModule({
  declarations: [MusicPlayerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    LoadImageModule,
    ScriptLoaderModule,
    PlaylistDataModule
  ],
  exports: [MusicPlayerComponent]
})
export class MusicPlayerModule {}
