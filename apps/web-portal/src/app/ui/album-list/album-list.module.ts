import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListComponent } from './album-list.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { AlbumsDataModule, AlbumsResolver } from '@iresa/web-portal-data';
import {
  LoadImageModule,
  LoadArtistsModule,
  LoadReleaseYearModule
} from '@iresa/shared/utilities';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    AlbumsDataModule,
    LoadImageModule,
    LoadArtistsModule,
    LoadReleaseYearModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: { data: AlbumsResolver },
        component: AlbumListComponent
      }
    ])
  ],
  providers: [AlbumsResolver]
})
export class AlbumListModule {}
