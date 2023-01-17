import { FormBuilder, Validators } from '@angular/forms';

export const FormBuilderHelper = (fb: FormBuilder) => fb.group({
  goalName: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  cost: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
});
