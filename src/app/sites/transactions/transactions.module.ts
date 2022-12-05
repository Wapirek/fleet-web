import { NgModule } from '@angular/core';
import { TransactionsComponent } from 'src/app/sites/transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import {
  MassiveTransactionComponent
} from 'src/app/shared-standalone/modals/transaction-modal/massive-transaction/massive-transaction.component';
import { Table1Component } from 'src/app/shared-standalone/tables/table-1/table-1.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent },
  { path: ':id', component: EditTransactionComponent }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    EditTransactionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MassiveTransactionComponent,
    Table1Component
  ]
})
export class TransactionsModule {}
