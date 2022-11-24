import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/structure-builder.helper';
import {
  CreateFormGroupProduct,
  FormBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/form-builder.helper';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/shared/models/models/product.model';
import {
  InitTransactionHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/init-transaction.helper';

@Component({
  standalone: true,
  selector: 'massive-transaction-modal',
  templateUrl: './massive-transaction.component.html',
  styleUrls: ['./massive-transaction.component.scss'],
  imports: [SharedModule]
})
export class MassiveTransactionComponent implements OnInit {

  // szkielet html
  @Input() skeleton = StructureBuilderHelper();

  // obiekt na ktorym bedzie pracowac komponent
  @Input() transactionWorking = InitTransactionHelper;

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();



  // formularz dla komponentu
  cmpForm!: FormGroup;

  private get productsArray() { return this.cmpForm?.get('products') as FormArray; }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.cmpForm = FormBuilderHelper(this.formBuilder, this.transactionWorking);
  }

  addProduct(): void {

    const emptyProduct = {
      id: -1,
      productName: '',
      quantity: 1,
      paid: '0'
    } as ProductModel;

    this.transactionWorking.products.push(emptyProduct);
    this.productsArray.push(CreateFormGroupProduct(this.formBuilder, emptyProduct));
  }

  removeProduct(rowIndex: number): void {
    this.transactionWorking.products.splice(rowIndex, 1);
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
