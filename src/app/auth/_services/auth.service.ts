import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/auth/_models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // main with connect all of services
  user = new BehaviorSubject<User | null>(null);

  autoSignIn(): void {

    // get username from localstorage
    const userData: {
      username: string;
      token: string;
      tokenExpiration: number;
    } = JSON.parse(localStorage.getItem('userData') || '{}');

    // if not exist then user will not log in
    if (!userData || !userData.tokenExpiration) { return; }

    const user = new User(userData.username, userData.token, userData.tokenExpiration);
    this.user.next(user);
  }

  // request to api, then log in this application
  signIn(username: string, password: string): Observable<{ msg: string }> {
   this.handleAuthentication(username);
    return of({ msg: 'Logowanie zakończone pomyślnie' });
  }

  logout(): Observable<{ msg: string}> {
    localStorage.removeItem('userData');
    this.user.next(null);

    return of({ msg: 'Wylogowano' });
  }

  private handleAuthentication(username: string): void {

    // loaded user to service
    const userData = new User(username, 'tokenHash', 99999999);
    this.user.next(userData);

    // set user date
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
