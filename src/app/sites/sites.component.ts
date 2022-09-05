import { Component } from '@angular/core';

@Component({
  selector: 'app-sites',
  template: `
    <app-navbar></app-navbar>
    <div class="center"><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent {}
