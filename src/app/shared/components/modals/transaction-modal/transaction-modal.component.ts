import { Component, EventEmitter, Output } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared/components/modals/transaction-modal/_helpers/structure-builder.helper';

@Component({
  selector: 'shared-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();

  formStructure = StructureBuilderHelper();
}
