import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NozeroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'nozero',
})
export class NozeroPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any) {
    return value>0?value:null;
  }
}
