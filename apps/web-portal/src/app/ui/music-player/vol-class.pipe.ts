import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volClass'
})
export class VolClassPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value === 0) {
      return 'volume_mute';
    } else if (value > 0.5 && value <= 1) {
      return 'volume_up';
    } else {
      return 'volume_down';
    }
  }
}
