import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/sites/dashboard/dashboard.component';
import { ImportFileModalComponent } from 'src/app/shared-standalone/modals/import-file-modal/import-file-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionModalComponent } from 'src/app/shared-standalone/modals/transaction-modal/transaction-modal.component';
import { GoalModalComponent } from 'src/app/shared-standalone/modals/goal-modal/goal-modal.component';
import { DebtModalComponent } from 'src/app/shared-standalone/modals/debt-modal./debt-modal.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    ImportFileModalComponent,
    TransactionModalComponent,
    GoalModalComponent,
    DebtModalComponent
  ],
  exports: [ DashboardComponent]
})
export class DashboardModule {}
