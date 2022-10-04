import { NgModule } from '@angular/core';
import { TransactionsComponent } from 'src/app/sites/transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TransactionsComponent }
    ])
  ]
})
export class TransactionsModule {}
