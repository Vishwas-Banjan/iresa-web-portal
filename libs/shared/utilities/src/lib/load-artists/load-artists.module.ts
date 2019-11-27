import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadArtistsPipe } from './load-artists.pipe';
import { LoadArtistGroupPipe } from './load-artist-group.pipe';

@NgModule({
  declarations: [LoadArtistsPipe, LoadArtistGroupPipe, LoadArtistGroupPipe],
  imports: [CommonModule],
  exports: [LoadArtistsPipe, LoadArtistGroupPipe]
})
export class LoadArtistsModule {}
