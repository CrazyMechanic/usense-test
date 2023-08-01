import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /\W/.test(password);

    if (password.length < 8) {
      return 'Weak';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 'Strong';
    } else {
      return 'Medium';
    }
  }
}
