import { AbstractControl, ValidationErrors } from '@angular/forms';

export function LatinCharsOnlyValidator(control: AbstractControl): ValidationErrors | null {
  const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/;
  const value = control.value;
  const result = passRegex.test(value);

  if (result) {
    if (control.errors && control.errors['latinValidator']) {
      delete control.errors['latinValidator'];
      control.setErrors(Object.keys(control.errors).length === 0 ? null : control.errors);
    }
    return null;
  } else {
    return {latinValidator: {value}};
  }
}
