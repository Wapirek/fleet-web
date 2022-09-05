import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    FontAwesomeModule
  ],
  exports: [
    MatMenuModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
