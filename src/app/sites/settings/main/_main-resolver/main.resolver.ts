import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { first, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { User } from 'src/app/auth/_models/user.model';

@Injectable({ providedIn: 'root' })
export class MainResolver implements Resolve<User | null> {

  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
    return this.authService.user
      .pipe(
        first()
      );
  }
}
