import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/form-builder.helper';
import { FormBuilder } from '@angular/forms';
import { ProfitModel } from 'src/app/shared-standalone/modals/profit-modal/_models/profit.model';

@Component({
  standalone: true,
  selector: 'profit-modal',
  template: `
    <shared-modal-style-1
      [formInitArray]="skeleton.fields"
      [title]="skeleton.title"
      [cmpForm]="cmpForm"
      (closeModal)="closeModal.emit()"
      (save)="save.emit($event)"
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

  // formularz dla komponentu
  cmpForm = FormBuilderHelper(this.formBuilder, {} as ProfitModel);

  // zlapanie eventu z dodatkowego przycisku,
  // dotyczacego przejesciu do innego komponnetu
  @Output() goTo = new EventEmitter<void>();

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();

  // przycisk potwierdzający zapis
  @Output() save = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}
}
