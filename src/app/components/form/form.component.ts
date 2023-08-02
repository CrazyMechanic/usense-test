import { Component, forwardRef } from '@angular/core';
import { FORM_LABELS, FORM_PLACEHOLDERS } from '../../shared/form-data';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { PasswordStrength, PasswordStrengthService } from '../../services/password.strength.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true,
    },
  ],
})
export class FormComponent implements ControlValueAccessor {
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;

  form: FormGroup;
  isFormSubmitted: boolean = false;
  passwordStrength: PasswordStrength = 'Weak';

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  checkPasswordStrength() {
    const password = this.form.get('password')?.value;
    this.passwordStrength = this.passwordStrengthService.getPasswordStrength(password);
    this.onChange(this.form.value);
  }

  writeValue(value: any) {
    if (value) {
      this.form.patchValue(value);
      const password = this.form.get('password')?.value;
      this.passwordStrength = this.passwordStrengthService.getPasswordStrength(password);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  isValidForm(): boolean {
    return this.form.valid && this.passwordStrength === 'Strong';
  }

  showSuccess() {
    this.isFormSubmitted = true;
    setTimeout(() => {
      this.isFormSubmitted = false;
      this.form.reset();
      this.passwordStrength = '';
      this.onChange(this.form.value);
      this.onTouched();
    }, 2000);
  }

  private onChange: any = () => {
  };

  private onTouched: any = () => {
  };
}
