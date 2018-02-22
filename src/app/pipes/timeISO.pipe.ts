import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeISO'
})
export class TimeISOPipe implements PipeTransform {

  transform(value: number): string {
    return moment(value).toISOString();
  }

}
