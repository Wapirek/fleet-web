import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumnsArray } from 'src/app/sites/settings/profits/_arrays/displayed-columns.array';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { first, Subject, Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;


  // getting paginator emitter from material component
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // lista kolumn przypisana do tabeli
  displayedColumns = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource = new MatTableDataSource<ProfitModel>();

  searcher$ = new Subject<string>();

  private subscription: Subscription | undefined;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {

    this.dataSource.connect().subscribe(s => console.log(s))

    this.sort?.sortChange.subscribe(s => console.log(s))

    this.settingsService.getCashFlowList()
      .subscribe(r => {
        console.log(r);
        this.dataSource.data = r;
      })
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
