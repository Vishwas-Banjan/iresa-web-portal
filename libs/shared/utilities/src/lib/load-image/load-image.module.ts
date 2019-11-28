import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadImagePipe } from './load-image.pipe';
import { LoadAdvImagePipe } from './load-adv-image.pipe';

@NgModule({
  declarations: [LoadImagePipe, LoadAdvImagePipe],
  imports: [CommonModule],
  exports: [LoadImagePipe, LoadAdvImagePipe]
})
export class LoadImageModule {}
