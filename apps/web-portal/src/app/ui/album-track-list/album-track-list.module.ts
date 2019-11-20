import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTrackListComponent } from './album-track-list.component';
import { RouterModule } from '@angular/router';
import { AlbumsDataModule, AlbumTracksResolver } from '@iresa/web-portal-data';
import { MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  LoadArtistsModule,
  LoadImageModule,
  SongTimeModule
} from '@iresa/shared/utilities';

@NgModule({
  declarations: [AlbumTrackListComponent],
  imports: [
    CommonModule,
    AlbumsDataModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    LoadArtistsModule,
    LoadImageModule,
    SongTimeModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumTrackListComponent,
        resolve: { data: AlbumTracksResolver }
      }
    ])
  ],
  providers: [AlbumTracksResolver]
})
export class AlbumTrackListModule {}
