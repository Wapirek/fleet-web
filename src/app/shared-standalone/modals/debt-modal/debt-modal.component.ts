import { Component, EventEmitter } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/debt-modal/_helpers/structure-builder.helper';

@Component({
  standalone: true,
  template: `
    <shared-modal-style-1
      [formInitArray]="structureBuilder"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-style-1>`,
  imports: [SharedModule]
})
export class DebtModalComponent {

  // tutuł komponentu
  title = 'Nowy dług';

  // niezbedna lista do zbudowania formularza
  structureBuilder = StructureBuilderHelper();

  // przycisk zamykajacy modal
  closeModal = new EventEmitter<void>();
}
