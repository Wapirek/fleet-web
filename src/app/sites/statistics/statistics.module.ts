import { NgModule } from '@angular/core';
import { StatisticsComponent } from 'src/app/sites/statistics/statistics.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: StatisticsComponent }
    ])
  ]
})
export class StatisticsModule {}
