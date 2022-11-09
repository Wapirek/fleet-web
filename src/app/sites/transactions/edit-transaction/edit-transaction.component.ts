import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/sites/transactions/edit-transaction/_helpers/form-builder.helper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent {

  skeleton = StructureBuilderHelper;

  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder, null);

  constructor(private formBuilder: FormBuilder) {}
}
