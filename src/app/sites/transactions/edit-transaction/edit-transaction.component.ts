import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/form-builder.helper';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper;

  cmpForm = FormBuilderHelper()
}
