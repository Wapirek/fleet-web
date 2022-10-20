import { Component } from '@angular/core';
import { ShortBtnCodeName, StructureBuilderHelper, StructureBuilderModel } from 'src/app/sites/dashboard/_helpers/structure-builder.helper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  skeleton: StructureBuilderModel = StructureBuilderHelper;

  // switch function for button inside shorts template
  shortsSwitch(btn: ShortBtnCodeName): void {
    const response: { [key: string]: any } = {
      'transactionAdd': this.transactionAdd,
      'goalAdd': this.transactionAdd,
      'transactions': this.transactionAdd,
      'fileImport': this.transactionAdd,
      'debtAdd': this.transactionAdd,
    };

    response[btn]();
  }

  private transactionAdd(): void {
    alert('dupa');
  }
}
