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
import { LoadImageModule } from '@iresa/shared/utilities';

@NgModule({
  declarations: [MusicPlayerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    LoadImageModule
  ],
  exports: [MusicPlayerComponent]
})
export class MusicPlayerModule {}
