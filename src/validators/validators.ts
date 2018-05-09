import { AbstractControl } from '@angular/forms';


export function ValidateNoZero(control: AbstractControl) {


    let a = Number(control.value) || 0;

    if (a > 0) {
        return { validEntry: true };
    }
    return null;
}