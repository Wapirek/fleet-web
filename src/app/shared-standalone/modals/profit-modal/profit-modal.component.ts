import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/structure-builder.helper';

@Component({
  standalone: true,
  selector: 'profit-modal',
  template: `
    <shared-modal-style-1
      [formInitArray]="skeleton.fields"
      [title]="skeleton.title"
      (closeModal)="closeModal.emit()"
    >
      <button class="goto-list-btn" (click)="goTo.emit()">
        <mat-icon inline="false">{{skeleton.goToBtn.icon}}</mat-icon>
        <span>{{skeleton.goToBtn.nameBtn}}</span>
      </button>
    </shared-modal-style-1>`,
  styleUrls: ['./profit-modal.component.scss'],
  imports: [SharedModule]
})
export class ProfitModalComponent {

  // struktura html
  skeleton = StructureBuilderHelper();

  // zlapanie eventu z dodatkowego przycisku,
  // dotyczacego przejesciu do innego komponnetu
  @Output() goTo = new EventEmitter<void>();

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();
}
