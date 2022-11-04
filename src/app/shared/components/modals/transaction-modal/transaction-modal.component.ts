import { Component, EventEmitter, Output } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared/components/modals/transaction-modal/_helpers/structure-builder.helper';

@Component({
  selector: 'shared-transaction-modal',
  template: `
    <shared-modal-base-1
      [formInitArray]="formStructure"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-base-1>`
})
export class TransactionModalComponent {

  // Inicjalna lista pól do formularza
  formStructure = StructureBuilderHelper();

  // tytuł komponentu
  title = 'Nowa transakcja';

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();
}
