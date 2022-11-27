import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SitesComponent } from 'src/app/sites/sites.component';
import { NavbarComponent } from './sites/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardModule } from 'src/app/sites/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    NavbarComponent
  ],
  imports: [
    DashboardModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
