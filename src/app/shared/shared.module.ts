import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatSnackBarModule,
    FontAwesomeModule
  ],
  exports: [
    MatMenuModule,
    MatSnackBarModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
