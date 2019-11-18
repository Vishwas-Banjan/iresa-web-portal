import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadArtists'
})
export class LoadArtistsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value.length === 1) {
      return value[0].name;
    } else {
      return 'Various Artists';
    }
  }
}
