import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaningDays'
})
export class RemaningDaysPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value == 1){
      return `today`
    }    
    return `in ${value} days`
}
}
