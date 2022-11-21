import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper
} from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/_helpers/form-builder.helper';
import { FormBuilder } from '@angular/forms';
import {
  SimpleTransactionModel
} from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/_models/simple-transaction.model';

@Component({
  standalone: true,
  selector: 'simple-transaction-modal',
  templateUrl: './simple-transaction.component.html',
  styleUrls: ['../../../../shared/components/modals/modal-style-1/modal-style-1.component.scss'],
  imports: [SharedModule]
})
export class SimpleTransactionComponent {

  @Output() closeModal = new EventEmitter<void>();

  // zapisana transakcja przesłana do rodzica
  @Output() createTransaction = new EventEmitter<SimpleTransactionModel>();

  // szkielet html
  skeleton = StructureBuilderHelper();

  // formularz dla komponentu
  cmpForm = FormBuilderHelper(this.formBuilder);

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

    // anuluj funkcje jesli form nie jest wlasciwie zwalidowany
    if (this.cmpForm.invalid) { return; }

    // utwórz obiekt z nowa transakcja
    const simpleTransaction: SimpleTransactionModel = {
      transactionName: this.cmpForm.get('transactionName')?.value,
      paid: this.cmpForm.get('paid')?.value
    };

    // przekaz dane do rodzica
    this.createTransaction.emit(simpleTransaction);
  }
}

