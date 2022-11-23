import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/structure-builder.helper';
import {
  CreateFormGroupProduct,
  FormBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/form-builder.helper';
import { FormArray, FormBuilder } from '@angular/forms';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';
import { ProductModel } from 'src/app/shared/models/models/product.model';

@Component({
  standalone: true,
  selector: 'massive-transaction-modal',
  templateUrl: './massive-transaction.component.html',
  styleUrls: ['./massive-transaction.component.scss'],
  imports: [SharedModule]
})
export class MassiveTransactionComponent {

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();

  // szkielet html
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

  // formularz dla komponentu
  cmpForm = FormBuilderHelper(this.formBuilder, this.example);


  private get productsArray() { return this.cmpForm.get('products') as FormArray; }

  constructor(private formBuilder: FormBuilder) {}

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

  // jedna funkcja do ktorej przychodza eventy z przyciskow
  operation(codeName: string): void {
    switch (codeName) {
      case 'cancel':
        this.closeModal.emit();
        break;
    }
  }

  // zapisz formularz, natepnie podaj dane do komponentu rodzica
  saveFunc(): void {
    console.log(this.cmpForm.value);
  }
}
