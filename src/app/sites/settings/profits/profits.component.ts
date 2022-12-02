import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { DisplayedColumnsArray, DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit {

  // lista kolumn przypisana do tabeli
  displayedColumns: DisplayedColumnsModel[] = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource: MatTableDataSource<TransactionModel> = new MatTableDataSource<TransactionModel>();

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.getCashFlowList().subscribe(
      r => console.log(r)
    )
  }
}
