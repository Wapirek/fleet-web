import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { User } from 'src/app/auth/_models/user.model';
import { first } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user
      .pipe(
        first(),
        exhaustMap(
          (user: User | null) => {
            if (user) {
              console.log('asds');
              req = req.clone({ setHeaders: {
                  Authorization: `Bearer ${user.tokenFunc}` }
              });
            }
            return next.handle(req);
          }
        )
      );
  }
}
