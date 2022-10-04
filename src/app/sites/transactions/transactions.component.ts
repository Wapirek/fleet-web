import { Component } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/_helpers/structure-builder.helper';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  skeleton = StructureBuilderHelper;
}
