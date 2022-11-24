import { Component } from '@angular/core';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/structure-builder.helper';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper();

  example: TransactionModel = {
    id: 1,
    transactionName: '',
    transactionDate: '',
    shop: '',
    recipe: 'Załącz',
    currency: 'PLN',
    isDefine: false,
    products: []
  };

  constructor() {

    // list
    this.skeleton.list.colSize = '100px 250px 80px 120px';
    this.skeleton.list.addBtn.justifyContent = 'flex-start';
    this.skeleton.list.addBtn.marginLeft = '32px';

    // bottom
    this.skeleton.bottom.flexDirection = 'row';
    this.skeleton.bottom.justifyContent = 'flex-start';
  }
}
