import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTrackListComponent } from './album-track-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlbumTrackListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumTrackListComponent
      }
    ])
  ]
})
export class AlbumTrackListModule {}
