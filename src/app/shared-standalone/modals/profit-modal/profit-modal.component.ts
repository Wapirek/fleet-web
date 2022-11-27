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
    >
      <button
        class="goto-list-btn"
      >
        <mat-icon inline="false">open_in_new</mat-icon>
        <span>Przejdź do listy przychodów</span>
      </button>
    </shared-modal-style-1>`,
  styleUrls: ['./profit-modal.component.scss'],
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
