import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';
import { WebPlaybackDataModule } from '@iresa/web-portal-data';
import { LoadArtistsModule, SongTimeModule } from '@iresa/shared/utilities';
import { SoundBarsComponent } from './sound-bars/sound-bars.component';

@NgModule({
  declarations: [QueueComponent, SoundBarsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    WebPlaybackDataModule,
    LoadArtistsModule,
    SongTimeModule,
    RouterModule.forChild([
      {
        path: '',
        component: QueueComponent
      }
    ])
  ],
  exports: [QueueComponent]
})
export class QueueModule {}
