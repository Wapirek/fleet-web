import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

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

  // lista kolumn przypisana do tabeli
  @Input() displayedColumns: DisplayedColumnsModel[] = [];

  // aktualny stan tabeli
  @Input() dataSource!: MatTableDataSource<T>;

  // pole wyszukiwania
  @Output() searcher = new EventEmitter<string>();

  // przypisanie do zmiennych sortowania z html
  @ViewChild(MatSort) sort!: MatSort;

  // przypisanie do zmiennych pagniacji z html
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {

    // dodanie do zrodla danych elemntu sortowania z html
    this.dataSource.sort = this.sort;

    // dodanie do zrodla danych elemntu paginacji z html
    this.dataSource.paginator = this.paginator;
  }
}
