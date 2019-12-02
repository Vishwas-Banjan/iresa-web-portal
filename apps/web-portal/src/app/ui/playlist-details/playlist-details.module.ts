import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDetailsComponent } from './playlist-details.component';
import { MatIconModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PlaylistTracksResolver } from '@iresa/web-portal-data';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { LoadArtistsModule, SongTimeModule } from '@iresa/shared/utilities';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PlaylistDetailsComponent, PlaylistTracksComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    LoadArtistsModule,
    SongTimeModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: { data: PlaylistTracksResolver },
        component: PlaylistDetailsComponent
      }
    ])
  ],
  providers: [PlaylistTracksResolver]
})
export class PlaylistDetailsModule {}
