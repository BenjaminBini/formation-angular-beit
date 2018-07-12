import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[viewDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ViewDateValidatorDirective, multi: true}]
})
export class ViewDateValidatorDirective {

  validate(control: AbstractControl): {[key:string]: any} | null {
    const viewDate = new Date(control.value);
    const today = new Date();
    const forbidden = viewDate > today;
    return forbidden ? {'wrong-date': {value: control.value}} : null;
  }

}
