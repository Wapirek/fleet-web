import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, merge, Subject } from 'rxjs';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';

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
  ]
})
export class Table1Component<T> implements AfterViewInit {

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

  ngAfterViewInit(): void {

    merge(
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
  }
}
