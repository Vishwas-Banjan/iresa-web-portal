import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadAdvImage'
})
export class LoadAdvImagePipe implements PipeTransform {
  private static readonly MUSIC_PLACEHOLDER = 'assets/music-placeholder.png';

  transform(value: any, ...args: any[]): any {
    if (value === null || value === undefined || value.length === 0) {
      return this.getRandomImageUrl(args[0]);
    } else if (value instanceof Array) {
      return this.getImageUrl(value[0]);
    }
    return this.getImageUrl(value);
  }

  getImageUrl(val) {
    return val.url ? val.url : LoadAdvImagePipe.MUSIC_PLACEHOLDER;
  }

  getRandomImageUrl(val) {
    const keywords = val
      .toLowerCase()
      .split(/(\s+)/)
      .filter(w => w.trim().length > 0);
    return `https://source.unsplash.com/150x150/?${keywords.join(',')}`;
  }
}
