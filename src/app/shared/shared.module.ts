import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MyCard1Component } from 'src/app/shared/components/widgets/my-card-1/my-card-1.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyCard1Component
  ],
  imports: [

    // angular core
    CommonModule,

    // angular material
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,

    // icons
    FontAwesomeModule
  ],
  exports: [

    // created
    MyCard1Component,

    // angular material
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,

    // icons
    FontAwesomeModule
  ]
})
export class SharedModule {}
