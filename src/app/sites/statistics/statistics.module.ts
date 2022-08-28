import { NgModule } from '@angular/core';
import { StatisticsComponent } from 'src/app/sites/statistics/statistics.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: StatisticsComponent }
    ])
  ]
})
export class StatisticsModule {}
