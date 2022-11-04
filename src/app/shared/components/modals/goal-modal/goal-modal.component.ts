import { Component, EventEmitter } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/shared/components/modals/goal-modal/_helpers/structure-builder.helper';

@Component({
  selector: 'shared-goal-modal',
  template: `
    <shared-modal-base-1
      [formInitArray]="structureBuilder"
      [title]="title"
      (closeModal)="closeModal.emit()"
    ></shared-modal-base-1>`
})
export class GoalModalComponent {
  title = 'Dodajesz nowy cel';
  structureBuilder = StructureBuilderHelper();
  closeModal = new EventEmitter<void>();
}
