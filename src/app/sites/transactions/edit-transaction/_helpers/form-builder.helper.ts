import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel, Transaction2Model } from 'src/app/shared/models/models/transaction-2.model';

export const FormBuilderHelper = (fb: FormBuilder, item: Transaction2Model | null): FormGroup => fb.group({
  transactionName: [
    item?.transactionName ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  date: [
    item?.date ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  shop: [
    item?.shop,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  recipePhoto: [
    item?.recipe ?? '',
    Validators.compose([
      Validators.required
    ])
  ],
  define: [
    item?.recipe ?? '',
    Validators.compose([
      Validators.required
    ])
  ],
  products: fb.array(item?.products.map((arrItem: ProductModel) => CreateFormGroupProduct(fb, arrItem)) ?? [])
});

export const CreateFormGroupProduct = (fb: FormBuilder, arrItem: ProductModel) => fb.group({
  productName: [
    arrItem.productName,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  amount: [
    arrItem.amount,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  cost: [
    arrItem.cost,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
});
