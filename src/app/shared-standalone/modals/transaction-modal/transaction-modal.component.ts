import { Component, EventEmitter, Output } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/transaction-modal/_helpers/structure-builder.helper';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'shared-transaction-modal',
  template: `
    <shared-modal-style-1
      [formInitArray]="formStructure"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-style-1>`,
  imports: [SharedModule]
})
export class TransactionModalComponent {

  // Inicjalna lista pól do formularza
  formStructure = StructureBuilderHelper();

  // tytuł komponentu
  title = 'Nowa transakcja';

  // active when user click on cross
  @Output() closeModal = new EventEmitter<void>();
}
