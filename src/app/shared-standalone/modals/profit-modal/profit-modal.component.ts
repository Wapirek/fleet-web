import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  StructureBuilderHelper,
  StructureBuilderModel
} from 'src/app/shared-standalone/modals/profit-modal/_helpers/structure-builder.helper';
import { FormBuilderHelper } from 'src/app/shared-standalone/modals/profit-modal/_helpers/form-builder.helper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';

@Component({
  standalone: true,
  selector: 'profit-modal',
  templateUrl: './profit-modal.component.html',
  styleUrls: ['./profit-modal.component.scss'],
  imports: [SharedModule]
})
export class ProfitModalComponent implements OnInit {

  // przypisz istniejacy element jesli istnieje
  @Input() profitModel = {} as ProfitModel;

  // dodatkowe opcje komponentu
  @Input() options?: { hiddenLinkAndRemove: boolean; } = {
    hiddenLinkAndRemove: false
  }

  // struktura html
  skeleton!: StructureBuilderModel;

  // formularz dla komponentu
  cmpForm!: FormGroup;

  // zlapanie eventu z dodatkowego przycisku,
  // dotyczacego przejesciu do innego komponnetu
  @Output() goTo = new EventEmitter<void>();

  // zamkniecie modalu
  @Output() closeModal = new EventEmitter<void>();

  // wysyła informacje do usuniecia
  @Output() remove = new EventEmitter<void>();

  // przycisk potwierdzający zapis
  @Output() save = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.skeleton = StructureBuilderHelper(!!this.profitModel.source)
    this.cmpForm = FormBuilderHelper(this.formBuilder, this.profitModel);
  }
}
