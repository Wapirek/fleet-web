import { NgModule } from '@angular/core';
import { SettingsComponent } from 'src/app/sites/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfitsComponent } from 'src/app/sites/settings/profits/profits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from 'src/app/sites/settings/main/main.component';
import { MainResolver } from 'src/app/sites/settings/main/_main-resolver/main.resolver';
import { MatTableModule } from '@angular/material/table';
import { Table1Component } from 'src/app/shared-standalone/tables/table-1/table-1.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', component: MainComponent, resolve: { response: MainResolver } },
      { path: 'przychody', component: ProfitsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    MainComponent,
    ProfitsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatTableModule,
    Table1Component
  ]
})
export class SettingsModule {}

