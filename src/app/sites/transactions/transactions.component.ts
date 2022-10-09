import { Component, OnInit } from '@angular/core';
import { CodeNameWidget, StructureBuilderHelper } from 'src/app/sites/transactions/_helpers/structure-builder.helper';
import { DisplayedColumnsArray, DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';
import { TransactionsService } from 'src/app/sites/transactions/_services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  // szkielet templatu
  skeleton = StructureBuilderHelper;

  // lista kolumn przypisana do tabeli
  displayedColumns: DisplayedColumnsModel[] = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource: MatTableDataSource<TransactionModel> = new MatTableDataSource<TransactionModel>();

  constructor(private transactionsService: TransactionsService) {}

  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.transactionsService.getListOfInstance().subscribe(
      (result: TransactionModel[]) => this.dataSource.data = result
    );
  }

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
