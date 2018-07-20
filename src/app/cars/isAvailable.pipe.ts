import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isAvailable'})
export class IsAvailablePipe implements PipeTransform {
  transform(value) {
    return value ? 'Yes' : 'No';
  }
}
