import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/_helpers/form-builder.helper';
import { FormBuilder } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'massive-transaction-modal',
  templateUrl: './massive-transaction.component.html',
  styleUrls: ['../../../../shared/components/modals/modal-style-1/modal-style-1.component.scss'],
  imports: [SharedModule]
})
export class MassiveTransactionComponent {

  @Output() closeModal = new EventEmitter<void>();

  // szkielet html
  skeleton = StructureBuilderHelper;

  // formularz dla komponentu
  cmpForm = FormBuilderHelper(this.formBuilder, null);

  constructor(private formBuilder: FormBuilder) {}

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
