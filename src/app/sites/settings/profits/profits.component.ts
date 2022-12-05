import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumnsArray } from 'src/app/sites/settings/profits/_arrays/displayed-columns.array';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { startWith, Subject, Subscription, switchMap } from 'rxjs';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements AfterViewInit, OnDestroy {

  // lista kolumn przypisana do tabeli
  displayedColumns = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource = new MatTableDataSource<ProfitModel>();

  // poczatkowy stan danych do tabeli
  initStateTable: StateTableModel = {
    pageIndex: 0,
    pageSize: 5,
    count: 0,
    searchTxt: ''
  };

  // zmienna obserwacyjna odpowiedzi z komponentu tabeli
  stateTable$ = new Subject<StateTableModel>();

  // subskrypcja elementow w tym komponencie do wylaczenia
  private subscription: Subscription | undefined;

  constructor(private settingsService: SettingsService) {}

  ngAfterViewInit(): void {

    // sprawdz stan danych do tabeli nastepenie przekaz je i odpytaj api
    this.subscription = this.stateTable$.pipe(
      startWith(this.initStateTable),
      switchMap((s: StateTableModel) => this.settingsService.getCashFlowList(s))
    ).subscribe(
      res => {

        // tabela zaczyna numeracje od 0
        this.initStateTable.pageIndex = res.pageIndex - 1;

        // przypisz ilosc wszysdtkich wyszukanych danych
        this.initStateTable.count = res.count;

        // pobierz mieso
        this.dataSource.data = res.data;
      }
    );
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
