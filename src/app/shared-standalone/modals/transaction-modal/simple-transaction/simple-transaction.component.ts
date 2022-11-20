import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/_helpers/form-builder.helper';
import { FormBuilder } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'simple-transaction-modal',
  templateUrl: './simple-transaction.component.html',
  styleUrls: ['./simple-transaction.component.scss'],
  imports: [SharedModule]
})
export class SimpleTransactionComponent {

  // szkielet html
  skeleton = StructureBuilderHelper();

  // formularz dla komponentu
  cmpForm = FormBuilderHelper(this.formBuilder);

  constructor(private formBuilder: FormBuilder) {}

  operation(codeName: string): void {
    
  }
}
