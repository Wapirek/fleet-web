import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { SettingsService } from 'src/app/sites/settings/_service/settings.service';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayedColumnsArray } from 'src/app/sites/settings/profits/_arrays/displayed-columns.array';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { filter, first, merge, startWith, Subject, Subscription, switchMap } from 'rxjs';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';
import { ProfitModalComponent } from 'src/app/shared-standalone/modals/profit-modal/profit-modal.component';
import { map } from 'rxjs/operators';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/_services/auth.service';

@Component({
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements AfterViewInit, OnDestroy {

  // ustawienie modala w aktualnym templacie html
  @ViewChild(PlaceholderDirective, { static: true })
  modalHost!: PlaceholderDirective;

  // lista kolumn przypisana do tabeli
  displayedColumns = DisplayedColumnsArray;

  // aktualny stan tabeli
  dataSource = new MatTableDataSource<ProfitModel>();

  // poczatkowy stan danych do tabeli
  stateTable: StateTableModel = {
    pageIndex: 0,
    pageSize: 5,
    count: 0,
    searchTxt: ''
  };

  // zmienna obserwacyjna odpowiedzi z komponentu tabeli
  stateTable$ = new Subject<StateTableModel>();

  // subskrypcja elementow w tym komponencie do wylaczenia
  private subscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {

    // sprawdz stan danych do tabeli nastepenie przekaz je i odpytaj api
    this.subscription = this.stateTable$.pipe(
      startWith(this.stateTable),
      switchMap((s: StateTableModel) => this.settingsService.getCashFlowList(s))
    ).subscribe(
      res => {

        // tabela zaczyna numeracje od 0
        this.stateTable.pageIndex = res.pageIndex - 1;

        // przypisz ilosc wszysdtkich wyszukanych danych
        this.stateTable.count = res.count;

        // pobierz mieso
        this.dataSource.data = res.data;
      }
    );
  }

  // po kliknieciu z listy elementu wyswietlamy modal z przychodem
  selectProfit(evt: any): void {

    // sprawdza czy istnieje derektywa do umieszczenia modala
    if (!this.modalHost) { return; }

    // miejsce komponentu modalnego
    const componentRef = this.modalHost.viewContainerRef.createComponent(ProfitModalComponent);

    // dodaj profit do dziedziczacego komponentu
    const profit = (evt as ProfitModel);

    // utwórz date na nowo
    profit.nextCashFlow = new Date((profit.nextCashFlow) as Date)
      .toISOString().slice(0, 10);

    // przypisz caly obiekt
    componentRef.instance.profitModel = profit;

    this.subscription = merge(
      componentRef.instance.closeModal.pipe(map(() => 'closeModal')),
      componentRef.instance.save,
      componentRef.instance.remove.pipe(map(() => 'remove'))
    ).pipe(
      map(res => {
        switch (res) {
          case 'closeModal':
            componentRef.destroy();
            return false;
          default:
            return res;
        }
      }),
      filter(res => res),
      switchMap(
        (res: any) => (res as ProfitModel).source
          ? this.settingsService.updateCashFlow(res as ProfitModel)
          : this.settingsService.deleteCashFlow(profit.source)
      ),
      first()
    ).subscribe(
      (res: ProfitModel | string) => {
        this.snackBar.open((res as ProfitModel).source ? 'Edycja przebiegła pomyślnie' : res as string);
        this.stateTable$.next(this.stateTable);
        componentRef.destroy();
      },
      () => {
        componentRef.destroy();
        this.snackBar.open('Co poszło nie tak');
      }
    )
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }
}
