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

@NgModule({
  declarations: [MusicPlayerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [MusicPlayerComponent]
})
export class MusicPlayerModule {}
