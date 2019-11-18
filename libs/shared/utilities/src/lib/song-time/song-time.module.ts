import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongTimePipe } from './song-time.pipe';

@NgModule({
  declarations: [SongTimePipe],
  imports: [CommonModule],
  exports: [SongTimePipe]
})
export class SongTimeModule {}
