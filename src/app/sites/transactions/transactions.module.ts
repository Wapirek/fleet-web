import { NgModule } from '@angular/core';
import { TransactionsComponent } from 'src/app/sites/transactions/transactions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { DisplayColsNamePipe } from 'src/app/sites/transactions/_pipes/display-cols-name/display-cols-name.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent },
  { path: ':id', component: EditTransactionComponent }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    DisplayColsNamePipe,
    EditTransactionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TransactionsModule {}
