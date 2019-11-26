import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTrackListComponent } from './album-track-list.component';
import { RouterModule } from '@angular/router';
import {
  AlbumsDataModule,
  AlbumTracksResolver,
  PlaylistDataModule
} from '@iresa/web-portal-data';
import {
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatDividerModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  LoadArtistsModule,
  LoadImageModule,
  SongTimeModule
} from '@iresa/shared/utilities';
import { PlaylistDialogComponent } from './playlist-dialog/playlist-dialog.component';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [AlbumTrackListComponent, PlaylistDialogComponent],
  imports: [
    CommonModule,
    AlbumsDataModule,
    PlaylistDataModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    FlexLayoutModule,
    LoadArtistsModule,
    LoadImageModule,
    SongTimeModule,
    FormsModule,
    A11yModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumTrackListComponent,
        resolve: { data: AlbumTracksResolver }
      }
    ])
  ],
  providers: [AlbumTracksResolver],
  exports: [PlaylistDialogComponent],
  entryComponents: [PlaylistDialogComponent]
})
export class AlbumTrackListModule {}
