import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadArtistGroup'
})
export class LoadArtistGroupPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.map(item => item.name).join('/');
  }
}
