import { Component } from '@angular/core';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '../../shared/form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;

  name: string = '';
  password: string = '';

  isWeakPassword: boolean = false;
  isMediumPassword: boolean = false;
  isStrongPassword: boolean = false;

  constructor() {
  }

  checkPasswordStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /\W/.test(password);

    this.isWeakPassword = false;
    this.isMediumPassword = false;
    this.isStrongPassword = false;

    if (password.length < 8) {
      this.isWeakPassword = true;
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.isStrongPassword = true;
    } else {
      this.isMediumPassword = true;
    }
  }

  isValidForm(): boolean {
    return this.name.trim() !== '' && this.isStrongPassword;
  }
}
