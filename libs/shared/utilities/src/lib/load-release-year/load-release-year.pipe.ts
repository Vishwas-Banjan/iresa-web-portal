import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadReleaseYear'
})
export class LoadReleaseYearPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const dateParts = value.split('-');
    return dateParts[0];
  }
}
