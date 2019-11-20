import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadImage'
})
export class LoadImagePipe implements PipeTransform {
  private static readonly MUSIC_PLACEHOLDER = 'assets/music-placeholder.png';
  transform(value: any, ...args: any[]): any {
    if (value === null || value === undefined || value.length === 0) {
      return LoadImagePipe.MUSIC_PLACEHOLDER;
    } else if (value instanceof Array) {
      return this.getImageUrl(value[0]);
    }
    return this.getImageUrl(value);
  }

  getImageUrl(val) {
    return val.url ? val.url : LoadImagePipe.MUSIC_PLACEHOLDER;
  }
}
