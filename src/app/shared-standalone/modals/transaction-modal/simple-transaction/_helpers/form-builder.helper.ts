import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PricePatternHelper } from 'src/app/shared/helpers/price-pattern.helper';

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
        Validators.pattern(PricePatternHelper),
        Validators.max(9999999999999)
      ])
    ])
  ],
});
