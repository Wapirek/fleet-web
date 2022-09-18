import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [

    // angular material
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,

    // icons
    FontAwesomeModule
  ],
  exports: [
    // angular material
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,

    // icons
    FontAwesomeModule
  ]
})
export class SharedModule {}
