import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldModel } from 'src/app/shared/models/models/field.model';

@Component({
  selector: 'shared-modal-base-1',
  templateUrl: `./modal-base-1.component.html`,
  styleUrls: ['./modal-base-1.component.scss']
})
export class ModalBase1Component {

  // tablica z polami niezbednymi do formularza
  @Input() formInitArray: FieldModel[][] | undefined;

  // tytul komponentu wyswietlajacy sie na samej gorze
  @Input() title = '';

  // przycisk zamykajacy komponent
  @Output() closeModal = new EventEmitter<void>();
}
