import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/structure-builder.helper';

@Component({
  standalone: true,
  selector: 'profit-modal',
  template: `
    <shared-modal-style-1
      [formInitArray]="structureBuilder"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-style-1>`,
  imports: [SharedModule]
})
export class ProfitModalComponent {

  // tytuł komponentu
  title = 'Zarządzaj przychodem';

  // struktura html
  structureBuilder = StructureBuilderHelper();

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();
}
