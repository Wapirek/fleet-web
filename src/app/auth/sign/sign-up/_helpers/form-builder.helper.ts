import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const FormBuilderHelper = (fb: FormBuilder) => fb.group({
  username: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  email: [
    '',
    Validators.compose([
      Validators.required,
      Validators.email,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  password: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  confirmPassword: [
    '',
    Validators.compose([
      Validators.required,
      checkPasswords
    ])
  ]
}, {
  validators: checkPasswords
});

const checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
  let pass = group.get('password')?.value;
  let confirmPass = group.get('confirmPassword')?.value
  return pass === confirmPass ? null : { notSame: true }
}
