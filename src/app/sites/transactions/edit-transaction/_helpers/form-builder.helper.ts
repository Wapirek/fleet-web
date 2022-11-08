import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';

export const FormBuilderHelper = (fb: FormBuilder, item: TransactionModel): FormGroup => fb.group({
  title: [
    item.name ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  type: [
    item.type ?? 'single',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  category: [
    item.category ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  place: [
    item.place ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  date: [
    item.date ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ]
});
