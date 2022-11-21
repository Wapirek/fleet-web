import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// wzór pozwalający na uzupełnienie przez uzytkownika kwoty bedacej po przecinku
const numRegex = /^-?\d*[.,]?\d{0,2}$/;

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
      Validators.compose([
        Validators.required,
        Validators.min(0),
        Validators.pattern(numRegex),
        Validators.max(9999999999999)
      ])
    ])
  ],
});
