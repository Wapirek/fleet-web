import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class Table1Component<T> implements OnInit {

  // lista kolumn przypisana do tabeli
  @Input() displayedColumns: DisplayedColumnsModel[] = [];

  // aktualny stan tabeli
  @Input() dataSource!: MatTableDataSource<T>;

  // pole wyszukiwania
  @Output() searcher = new EventEmitter<string>();

  // przypisanie do zmiennych sortowania i pagniacji z html
  @Input() sort!: MatSort;
  @Input() paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
