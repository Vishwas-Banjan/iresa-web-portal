import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybackConnectComponent } from './playback-connect.component';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  declarations: [PlaybackConnectComponent],
  imports: [CommonModule],
  exports: [PlaybackConnectComponent]
})
export class PlaybackConnectModule {}
