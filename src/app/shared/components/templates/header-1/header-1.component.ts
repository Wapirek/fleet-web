import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

@Component({
  selector: 'shared-header-1',
  template: `
    <div class="header">
      <mat-icon>{{header.icon}}</mat-icon>
      <div class="header__title">
        <a *ngFor="let title of header.titles" (click)="outputTitle.emit(title.codeName)">
          {{title.displayName}}
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./header-1.component.scss']
})
export class Header1Component {

  // pobiera ikone oraz tablice tytulow z url lub z reki :)
  @Input() header!: HeaderModel;

  // Zwraca tytul ktory zostal klikniety
  @Output() outputTitle = new EventEmitter<string>();
}
