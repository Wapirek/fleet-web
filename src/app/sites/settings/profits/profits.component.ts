import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumnsArray } from 'src/app/sites/settings/profits/_arrays/displayed-columns.array';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements AfterViewInit, OnDestroy {

  // lista kolumn przypisana do tabeli
  displayedColumns = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource = new MatTableDataSource<ProfitModel>();

  searcher$ = new Subject<string>();

  private subscription: Subscription | undefined;

  constructor(private settingsService: SettingsService) {}

  ngAfterViewInit(): void {

    this.searcher$.subscribe(txt => console.log(txt));

    this.dataSource.sort?.sortChange.subscribe(s => console.log(s));

    this.settingsService.getCashFlowList()
      .subscribe(r => {
        console.log(r);
        this.dataSource.data = r;
      })
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
