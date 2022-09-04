import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesComponent } from 'src/app/sites/sites.component';
import { DashboardComponent } from './sites/dashboard/dashboard.component';
import { NavbarComponent } from './sites/navbar/navbar.component';
import { SettingsComponent } from './sites/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
