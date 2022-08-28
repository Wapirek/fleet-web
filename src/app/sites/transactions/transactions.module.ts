import { NgModule } from '@angular/core';
import { TransactionsComponent } from 'src/app/sites/transactions/transactions.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: TransactionsComponent }
    ])
  ]
})
export class TransactionsModule {}
