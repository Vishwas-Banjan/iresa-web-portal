import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from './music-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';
import { LoadImageModule, ScriptLoaderModule } from '@iresa/shared/utilities';
import { PlaylistDataModule } from '@iresa/web-portal-data';
import { VolClassPipe } from './vol-class.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MusicPlayerComponent, VolClassPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    LoadImageModule,
    ScriptLoaderModule,
    PlaylistDataModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [MusicPlayerComponent]
})
export class MusicPlayerModule {}
