import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadReleaseYearPipe } from './load-release-year.pipe';

@NgModule({
  declarations: [LoadReleaseYearPipe],
  imports: [CommonModule],
  exports: [LoadReleaseYearPipe]
})
export class LoadReleaseYearModule {}
