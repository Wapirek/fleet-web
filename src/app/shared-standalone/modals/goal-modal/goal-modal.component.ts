import { Component, EventEmitter } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared-standalone/modals/goal-modal/_helpers/structure-builder.helper';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/goal-modal/_helpers/form-builder.helper';

@Component({
  standalone: true,
  selector: 'goal-modal',
  template: `
    <shared-modal-style-1
      [cmpForm]="cmpForm"
      [formInitArray]="structureBuilder"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-style-1>`,
  imports: [SharedModule]
})
export class GoalModalComponent {

  // formularz dla komponentu
  cmpForm: FormGroup = FormBuilderHelper(this.formBuilder);

  // tutuł komponentu
  title = 'Dodajesz nowy cel';

  // niezbedna lista do zbudowania formularza
  structureBuilder = StructureBuilderHelper();

  // przycisk zamykajacy modal
  closeModal = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}
}
