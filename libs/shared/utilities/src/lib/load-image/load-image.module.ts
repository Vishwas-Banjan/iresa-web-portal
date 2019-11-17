import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadImagePipe } from './load-image.pipe';



@NgModule({
  declarations: [LoadImagePipe],
  imports: [
    CommonModule
  ],
  exports: [LoadImagePipe]
})
export class LoadImageModule { }
