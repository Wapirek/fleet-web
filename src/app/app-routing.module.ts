import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SitesComponent } from 'src/app/sites/sites.component';
import { DashboardComponent } from 'src/app/sites/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/auth/_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SitesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'transakcje',
        loadChildren: () =>
          import('./sites/transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: 'statystyki',
        loadChildren: () =>
          import('./sites/statistics/statistics.module').then(m => m.StatisticsModule )
      },
      {
        path: 'ustawienia',
        loadChildren: () =>
          import('./sites/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: 'autoryzacja',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
