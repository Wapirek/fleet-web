import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SitesComponent } from 'src/app/sites/sites.component';
import { SettingsComponent } from 'src/app/sites/settings/settings.component';
import { DashboardComponent } from 'src/app/sites/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SitesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'ustawienia', component: SettingsComponent },
      {
        path: 'transakcje',
        loadChildren: () =>
          import('./sites/transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: 'statystyki',
        loadChildren: () =>
          import('./sites/statistics/statistics.module').then(m => m.StatisticsModule )
      }
    ]
  },
  {
    path: 'autoryzacja',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
