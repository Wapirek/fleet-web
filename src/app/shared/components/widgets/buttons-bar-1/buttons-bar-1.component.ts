import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModel } from 'src/app/shared/models/structure-html/button.model';
import { OptionsModel } from 'src/app/shared/components/widgets/buttons-bar-1/_models/options.model';

@Component({
  selector: 'shared-buttons-bar-1',
  templateUrl: './buttons-bar-1.component.html',
  styleUrls: ['./buttons-bar-1.component.scss']
})
export class ButtonsBar1Component {

  // lista przyciskow do wyswietlenia
  @Input() buttons!: ButtonModel[];

  // dodatkowe opcje do personalizacji
  @Input() options: OptionsModel | undefined;

  // odpowiedz po kliknieciu z nazwa kodowa
  @Output() btnOutput = new EventEmitter<string>();
}
