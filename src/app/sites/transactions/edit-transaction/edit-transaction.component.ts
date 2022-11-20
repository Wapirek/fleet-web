import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/structure-builder.helper';
import { CreateFormGroupProduct, FormBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/form-builder.helper';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';
import { ProductModel } from 'src/app/shared/models/models/product.model';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper;

  example: TransactionModel = {
    id: 1,
    transactionName: '',
    transactionDate: '22.01.2022',
    shop: 'Biedronka',
    recipe: '',
    currency: 'PLN',
    isDefine: false,
    products: [
      {
        id: 1,
        productName: 'Pasta do zebów',
        paid: '9 zł',
        quantity: 1
      }
    ]
  };

  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder, this.example);

  private get productsArray() { return this.cmpForm.get('products') as FormArray; }

  constructor(private formBuilder: FormBuilder) {}

  save(): void { console.log(this.cmpForm.value); }

  addProduct(): void {

    const emptyProduct = {
      id: -1,
      productName: '',
      quantity: 1,
      paid: '0'
    } as ProductModel;

    this.example.products.push(emptyProduct);
    this.productsArray.push(CreateFormGroupProduct(this.formBuilder, emptyProduct));
  }

  removeProduct(rowIndex: number): void {
    this.example.products.splice(rowIndex, 1);
    this.productsArray.removeAt(rowIndex);
  }
}
