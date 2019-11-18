import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadArtistsPipe } from './load-artists.pipe';

@NgModule({
  declarations: [LoadArtistsPipe],
  imports: [CommonModule],
  exports: [LoadArtistsPipe]
})
export class LoadArtistsModule {}
