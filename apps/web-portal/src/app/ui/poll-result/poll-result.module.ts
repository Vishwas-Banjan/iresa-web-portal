import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollResultComponent } from './poll-result.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PollResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // resolve: { data: AlbumsResolver },
        component: PollResultComponent
      }
    ])
  ],
  exports: [PollResultComponent]
})
export class PollResultModule {}
