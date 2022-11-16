import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/form-builder.helper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction2Model } from 'src/app/shared/models/models/transaction-2.model';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper;

  readonly example: Transaction2Model = {
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

  constructor(private formBuilder: FormBuilder) {}

  save(): void {
    console.log(this.cmpForm.value);
  }
}
