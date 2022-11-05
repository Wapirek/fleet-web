import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldModel } from 'src/app/shared/models/models/field.model';

@Component({
  selector: 'shared-modal-style-1',
  templateUrl: './modal-style-1.component.html',
  styleUrls: ['modal-style-1.component.scss'],
})
export class ModalStyle1Component {

  // tablica z polami niezbednymi do formularza
  @Input() formInitArray: FieldModel[][] | undefined | null;

  // tytul komponentu wyswietlajacy sie na samej gorze
  @Input() title = '';

  // przycisk zamykajacy komponent
  @Output() closeModal = new EventEmitter<void>();

  // przycisk potwierdzający zapis
  @Output() save = new EventEmitter<any>();
}
