import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/_helpers/structure-builder.helper';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionTemplateType } from 'src/app/shared-standalone/modals/transaction-modal/types/transaction-template.type';

@Component({
  standalone: true,
  selector: 'transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
  imports: [SharedModule]
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
}
