import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if(value.includes('test')){
      return {
        invalidEmail:true
      }
    }
    return null
  }
}
