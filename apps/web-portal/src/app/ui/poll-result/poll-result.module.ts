import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollResultComponent } from './poll-result.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';
import { LoadArtistsModule } from '@iresa/shared/utilities';
import { PollDataModule } from '@iresa/web-portal-data';

@NgModule({
  declarations: [PollResultComponent],
  imports: [
    CommonModule,
    MatTableModule,
    LoadArtistsModule,
    PollDataModule,
    RouterModule.forChild([
      {
        path: '',
        component: PollResultComponent
      }
    ])
  ],
  exports: [PollResultComponent]
})
export class PollResultModule {}
