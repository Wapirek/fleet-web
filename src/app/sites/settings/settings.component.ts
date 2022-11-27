import { Component } from '@angular/core';
import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';

@Component({
  selector: 'app-settings',
  template: `
    <div class="container">
      <div class="header">
        <mat-icon>{{header.icon}}</mat-icon>
        <h2>{{header.title}}</h2>
      </div>
      <router-outlet></router-outlet>
      <div class="footer"></div>
    </div>
  `,
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  header: HeaderModel = { icon: 'tune', title: 'Ustawienia' };
}
