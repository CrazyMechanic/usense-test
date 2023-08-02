import { Injectable } from '@angular/core';

export type PasswordStrength = '' | 'Short' | 'Weak' | 'Medium' | 'Strong';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): PasswordStrength {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /\W/.test(password);

    if (password.length < 8) {
      return 'Short';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'Strong';
    } else if ((hasLetters && hasNumbers) || (hasNumbers && hasSymbols) || (hasLetters && hasSymbols)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }
}
