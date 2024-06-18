import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function existEmailValidator(existEmails: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    let emailVal: string = control.value;
    if (emailVal.length == 0 && control.untouched) return null;
    console.log(existEmails);
    let validationError = { existEmail: { value: emailVal } };
    let foundEmail = existEmails.includes(emailVal);
    return foundEmail ? validationError : null;
    // return (emailVal.includes('@')) ? null : validationError;
    };
}
