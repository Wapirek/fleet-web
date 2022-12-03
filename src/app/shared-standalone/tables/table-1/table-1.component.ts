import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';
import { DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { TransactionModel } from 'src/app/shared/models/models/transaction/transaction.model';

@Component({
  standalone: true,
  templateUrl: './table-1.component.html',
  styleUrls: ['./table-1.component.scss'],
  imports: [
    SharedModule, MatTableModule
  ]
})
export class Table1Component {

  // lista kolumn przypisana do tabeli
  @Input() displayedColumns: DisplayedColumnsModel[] = [];

  // aktualny stan tabeli
  @Input() dataSource: MatTableDataSource<TransactionModel> | undefined;

  // aktywny pole wyszukiwania
  searcher$ = new Subject<string>();
}
