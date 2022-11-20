import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const FormBuilderHelper = (fb: FormBuilder): FormGroup => fb.group({
  transactionName: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  paid: [
    0,
    Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.min(9999999999999)
    ])
  ],
});
