import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, merge, Subject, Subscription } from 'rxjs';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';
import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'shared-standalone-table-1',
  templateUrl: './table-1.component.html',
  styleUrls: ['./table-1.component.scss'],
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [DatePipe]
})
export class Table1Component<T> implements AfterViewInit, OnDestroy {

  // przypisanie do zmiennych sortowania z html
  @ViewChild(MatSort) sort!: MatSort;

  // przypisanie do zmiennych pagniacji z html
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ilosc wszystkich elementow, ktore istnieja w bazie o danym parametrze
  @Input() count = 0;

  // lista kolumn przypisana do tabeli
  @Input() displayedColumns: DisplayedColumnsModel[] = [];

  // aktualny stan tabeli
  @Input() dataSource!: MatTableDataSource<T>;

  // pole wyszukiwania
  searcher$ = new Subject<string>();

  // binder laczacy state rodzica z stanem tabeli
  @Input() state!: StateTableModel;
  @Output() stateChange = new EventEmitter<StateTableModel>();

  // zwroc wybrany element
  @Output() selectedId = new EventEmitter<number>();

  // subskrypcja elementow w tym komponencie do wylaczenia
  private subscription = new Subscription();

  ngAfterViewInit(): void {

    const sub = merge(
      this.paginator?.page,
      this.sort?.sortChange,
      this.searcher$.pipe(debounceTime(600), distinctUntilChanged())
    ).pipe(
    ).subscribe((term: string | Sort | PageEvent | {}) => {

      // zareaguj na dzialanie gdy uzytkownik wpisze tekst
      if (typeof term === 'string') {
        this.state.searchTxt = term;

        // zareaguj kiedy uzytkownik sortuje tabele
      } else if ((term as Sort).active) {

        // zareaguj kiedy uztykownik zmieni strone
      } else if (term as PageEvent) {
        this.state.pageIndex = (term as PageEvent).pageIndex;
        this.state.pageSize = (term as PageEvent).pageSize;
      }

      // odeslij gotowy stan tabeli
      this.stateChange.emit(this.state);
    })

    this.subscription.add(sub);
  }

  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}
