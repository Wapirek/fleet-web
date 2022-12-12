import { FormBuilder, Validators } from '@angular/forms';

export const FormBuilderHelper = (fb: FormBuilder) => fb.group({
  username: [
    '',
    Validators.compose([
      Validators.required,
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
  ]
});
