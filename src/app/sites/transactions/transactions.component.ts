import { Component, OnInit } from '@angular/core';
import { StructureBuilderHelper } from 'src/app/sites/transactions/_helpers/structure-builder.helper';
import { DisplayedColumnsArray } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionModel } from 'src/app/shared/models/models/transaction/transaction.model';
import { TransactionsService } from 'src/app/sites/transactions/_services/transactions.service';
import { first, startWith, Subject, switchMap } from 'rxjs';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';
import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';

@Component({
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {

  // szkielet templatu
  skeleton = StructureBuilderHelper;

  // lista kolumn przypisana do tabeli
  displayedColumns: DisplayedColumnsModel[] = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource: MatTableDataSource<TransactionModel> = new MatTableDataSource<TransactionModel>();

  // zmienna obserwacyjna odpowiedzi z komponentu tabeli
  stateTable$ = new Subject<StateTableModel>();

  // poczatkowy stan danych do tabeli
  initStateTable: StateTableModel = {
    pageIndex: 0,
    pageSize: 5,
    count: 0,
    searchTxt: ''
  };

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {

    // sprawdz stan danych do tabeli nastepenie przekaz je i odpytaj api
    this.stateTable$.pipe(
      startWith(this.initStateTable),
      switchMap((s: StateTableModel) => this.transactionsService.getListOfInstance()),
      first()
    ).subscribe(
      res => {

        // pobierz mieso
        this.dataSource.data = res;
      }
    );
  }

  addTransaction(): void {}

  eventWidgetSwitch(codeName: string): void {
    switch (codeName) {
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
