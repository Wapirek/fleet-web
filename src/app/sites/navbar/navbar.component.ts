import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  faCircleUser = faCircleUser;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout().subscribe(
      (res: {msg: string}) => this.router.navigate(['/autoryzacja'])
        .then(() => this.snackBar.open(res.msg))
    );
  }
}
