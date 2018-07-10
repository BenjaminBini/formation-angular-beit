import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adultPipe'
})
export class AdultPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return '<i class="material-icons pink">whatshot</i>';
    }
  }

}
