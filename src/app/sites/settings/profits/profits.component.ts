import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';
import { DisplayedColumnsArray } from 'src/app/sites/settings/profits/_arrays/displayed-columns.array';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { first, Subscription } from 'rxjs';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit, OnDestroy {

  // lista kolumn przypisana do tabeli
  displayedColumns: DisplayedColumnsModel[] = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource: MatTableDataSource<ProfitModel> = new MatTableDataSource<ProfitModel>();

  private subscription: Subscription | undefined;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.settingsService.getCashFlowList()
      .pipe(first())
      .subscribe(r => this.dataSource.data = r)
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
