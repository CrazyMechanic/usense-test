import { Component, OnInit } from '@angular/core';
import { FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_VALIDATION_MESSAGES } from '../../shared/form-data';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get name(): AbstractControl {
    return this.userForm.controls['name'];
  }

  get password(): AbstractControl {
    return this.userForm.controls['password'];
  }

  ngOnInit() {
    this.initializeForm();
  }

  onValueChanged() {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach(fieldName => {
      const control = form.get(fieldName);
      this.formErrors[fieldName] = '';

      if (control?.invalid && (control.dirty || control.touched)) {
        const massages = this.validationMessages[fieldName];

        Object.keys(control.errors as ValidationErrors).every(key => {
          this.formErrors[fieldName] = massages[key];
        });
      }
    });
  }

  private initializeForm(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });

    this.userForm.valueChanges?.subscribe(() => this.onValueChanged());
  }

}
