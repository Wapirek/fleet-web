import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/structure-builder.helper';
import { CreateFormGroupProduct, FormBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/form-builder.helper';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel, Transaction2Model } from 'src/app/shared/models/models/transaction-2.model';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper;

  example: Transaction2Model = {
    category: 'zakupy',
    date: '22.01.2022',
    shop: 'Biedronka',
    recipe: '',
    products: [
      { productName: 'Pasta do zebów', cost: '9 zł', amount: 1, isEdited: false },
      { productName: 'Jajka', cost: '10 zł', amount: 1, isEdited: false },
      { productName: 'Jabłka', cost: '8 zł', amount: 2, isEdited: false }
    ]
  }

  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder, this.example);

  private get productsArray() { return this.cmpForm.get('products') as FormArray; }

  constructor(private formBuilder: FormBuilder) {}

  save(): void { console.log(this.cmpForm.value); }

  addProduct(): void {
    const emptyProduct = { productName: '', amount: 1, cost: '0' } as ProductModel;
    this.example.products.push(emptyProduct);
    this.productsArray.push(CreateFormGroupProduct(this.formBuilder, emptyProduct));
  }

  removeProduct(rowIndex: number): void {
    this.example.products.splice(rowIndex, 1);
    this.productsArray.removeAt(rowIndex);
  }
}
