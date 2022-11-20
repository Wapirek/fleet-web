import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/_helpers/structure-builder.helper';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionTemplateType } from 'src/app/shared-standalone/modals/transaction-modal/types/transaction-template.type';
import {
  SimpleTransactionComponent
} from 'src/app/shared-standalone/modals/transaction-modal/simple-transaction/simple-transaction.component';
import {
  MassiveTransactionComponent
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/massive-transaction.component';

@Component({
  standalone: true,
  selector: 'transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
  imports: [
    SharedModule,
    SimpleTransactionComponent,
    MassiveTransactionComponent
  ]
})
export class TransactionModalComponent {

  @Input() isSimpleTransaction: boolean | undefined;

  // Inicjalna lista pól do formularza
  formStructure = StructureBuilderHelper();

  // tytuł komponentu
  title = 'Nowa transakcja';

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();

  transactionTemplate: TransactionTemplateType = 'choice';

  choiceTemplate(transactionType: TransactionTemplateType): void {
    this.transactionTemplate = transactionType;
  }
}
