import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/_services/auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.autoSignIn();
  }
}
