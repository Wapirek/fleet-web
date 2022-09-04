import { Component } from '@angular/core';

@Component({
  selector: 'app-sites',
  template: `
    <div class="center">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {}
