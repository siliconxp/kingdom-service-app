import { AbstractControl } from '@angular/forms';


export function ValidateNoZero(control: AbstractControl) {


    let a = Number(control.value) || 0;

    if (a > 0) {
        return { validEntry: true };
    }
    return null;
}

export function EmailValidator(control: AbstractControl) {
    
    
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        control.value
      );
  
      if (re) {
        return null;
      }
  
      return {
        invalidEmail: true,
      };
    
  }