import { NgModule } from '@angular/core';
import { SettingsComponent } from 'src/app/sites/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfitsComponent } from 'src/app/sites/settings/profits/profits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsResolver } from 'src/app/sites/settings/_resolvers/settings.resolver';
import { MatTableModule } from '@angular/material/table';
import { Table1Component } from 'src/app/shared-standalone/tables/table-1/table-1.component';

const routes: Routes = [
  { path: '', component: SettingsComponent, resolve: { response: SettingsResolver } },
  { path: 'przychody', component: ProfitsComponent }
];

@NgModule({
  declarations: [
    SettingsComponent,
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

