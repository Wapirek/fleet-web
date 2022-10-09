import { Component } from '@angular/core';
import { CodeNameWidget, StructureBuilderHelper } from 'src/app/sites/transactions/_helpers/structure-builder.helper';
import { DisplayedColumnsArray, DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  // skeleton to create template
  skeleton = StructureBuilderHelper;

  // columns
  displayedColumns: DisplayedColumnsModel[] = DisplayedColumnsArray;

  dataSource: any;

  addTransaction(): void {}

  eventWidgetSwitch(codeNameWidget: CodeNameWidget): void {
    switch (codeNameWidget) {
      case 'add_transaction':
        this.addTransaction();
        break;
      case 'list_category':
        this.showListCategory();
        break;
    }
  }

  showListCategory(): void {}
}
