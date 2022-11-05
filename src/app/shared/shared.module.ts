import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MyCard1Component } from 'src/app/shared/components/widgets/my-card-1/my-card-1.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DictArrayCardPipe } from 'src/app/shared/components/widgets/my-card-1/_pipes/dict-array-card.pipe';
import { RouterModule } from '@angular/router';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorTranslateService } from 'src/app/shared/components/table-utils/paginator-translate/paginator-translate.service';
import { BarChartComponent } from 'src/app/shared/components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/shared/components/charts/pie-chart/pie-chart.component';
import { PlaceholderDirective } from 'src/app/shared/directives/placeholder.directive';
import { ModalStyle1Component } from './components/modals/modal-style-1/modal-style-1.component';

@NgModule({
  declarations: [
    MyCard1Component,
    DictArrayCardPipe,
    BarChartComponent,
    PieChartComponent,

    // modal base
    ModalStyle1Component,

    // directives
    PlaceholderDirective
  ],
  imports: [

    // angular core
    CommonModule,
    RouterModule,

    // angular material
    MatMenuModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,

    // icons
    FontAwesomeModule
  ],
  exports: [

    // angular core
    CommonModule,
    RouterModule,

    // created
    MyCard1Component,
    BarChartComponent,
    PieChartComponent,

    // modals
    ModalStyle1Component,

    // angular material
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonModule,

    // icons
    FontAwesomeModule,

    // pipes
    DictArrayCardPipe,

    // directives
    PlaceholderDirective
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 2500,
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
      }
    },
    { provide: MatPaginatorIntl, useFactory: () => new PaginatorTranslateService().use() }
  ]
})
export class SharedModule {}
