import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from 'src/app/shared/models/models/transaction/transaction.model';
import { ProductModel } from 'src/app/shared/models/models/transaction/product.model';

export const FormBuilderHelper = (fb: FormBuilder, item: TransactionModel | null): FormGroup => fb.group({
  transactionName: [
    item?.transactionName ?? '',
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  transactionDate: [
    item?.transactionDate ?? '',
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
  recipe: [
    item?.recipe ?? 'Załącz',
    Validators.compose([
      Validators.required
    ])
  ],
  isDefine: [
    item?.isDefine ?? false,
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
  quantity: [
    arrItem.quantity,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
  paid: [
    arrItem.paid,
    Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ])
  ],
});
