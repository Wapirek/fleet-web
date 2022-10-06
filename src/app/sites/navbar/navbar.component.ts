import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/_models/user.model';
import { first } from 'rxjs';
import { StructureBuilderHelper } from 'src/app/sites/navbar/_helpers/structure-builder.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // logo next to username
  faCircleUser = faCircleUser;

  // display name in nav
  username = '';

  // skeleton for html
  skeleton = StructureBuilderHelper;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.authService.user
      .pipe(first())
      .subscribe((user: User | null) => this.username = user?.name ?? '');
  }

  // logout function and go to authorization
  logout(): void {
    this.authService.logout().pipe(first()).subscribe(
      (res: {msg: string}) => this.router.navigate(['/autoryzacja'])
        .then(() => this.snackBar.open(res.msg))
    );
  }
}
