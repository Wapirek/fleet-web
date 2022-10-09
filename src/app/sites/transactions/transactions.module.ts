import { NgModule } from '@angular/core';
import { TransactionsComponent } from 'src/app/sites/transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { DisplayColsNamePipe } from 'src/app/sites/transactions/_pipes/display-cols-name/display-cols-name.pipe';

@NgModule({
  declarations: [
    TransactionsComponent,
    DisplayColsNamePipe
  ],
  imports: [
    RouterModule.forChild([{path: '', component: TransactionsComponent}]),
    SharedModule,
    MatTableModule
  ]
})
export class TransactionsModule {}
