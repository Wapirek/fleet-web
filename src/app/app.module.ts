import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SitesComponent } from 'src/app/sites/sites.component';
import { DashboardComponent } from './sites/dashboard/dashboard.component';
import { NavbarComponent } from './sites/navbar/navbar.component';
import { SettingsComponent } from './sites/settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    DashboardComponent,
    NavbarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
