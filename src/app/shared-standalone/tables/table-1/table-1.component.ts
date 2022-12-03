import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';

@Component({
  standalone: true,
  selector: 'shared-standalone-table-1',
  templateUrl: './table-1.component.html',
  styleUrls: ['./table-1.component.scss'],
  imports: [SharedModule, MatTableModule]
})
export class Table1Component<T> {

  // lista kolumn przypisana do tabeli
  @Input() displayedColumns: DisplayedColumnsModel[] = [];

  // aktualny stan tabeli
  @Input() dataSource!: MatTableDataSource<T>;

  // pole wyszukiwania
  @Output() searcher = new EventEmitter<string>();
}
