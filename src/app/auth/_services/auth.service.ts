import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/auth/_models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseModel } from 'src/app/auth/_services/_models/auth-response.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // Główna instacja obiektu uzytkownik
  user = new BehaviorSubject<User | null>(null);

  // adres http do api - nalezy pamietac ze jest zakonczony /
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // automatyczne logowanie po uruchomieniu aplikacji
  autoSignIn(): void {

    // pobieranie danych z localstorage
    const userData: {
      username: string;
      token: string;
      tokenExpiration: number;
    } = JSON.parse(localStorage.getItem('userData') || '{}');

    // jesli nie wystepuja dane nalezy przerwac
    if (!userData || !userData.tokenExpiration) { return; }

    // jesli istnieja to zostana przypisane do obiektu
    const user = new User(userData.username, userData.token, userData.tokenExpiration);
    this.user.next(user);
  }

  // zapytanie do api, majace na pobranie tokena
  signIn(username: string, password: string): Observable<string> {
    return this.http.post<AuthResponseModel>(
      this.apiUrl + 'auth/login', { login: username, password: password }
    ).pipe(
      map((res: AuthResponseModel) => {
        this.handleAuthentication(res.response.email, res.response.token);
        return res.message;
      })
    );
  }

  // wylogowanie uzytkownika
  logout(): Observable<{ msg: string}> {
    localStorage.removeItem('userData');
    this.user.next(null);
    return of({ msg: 'Wylogowano' });
  }

  private handleAuthentication(email: string, token: string): void {

    // zaladuj dane do glownego obiektu
    const userData = new User(email, token, 99999999);
    this.user.next(userData);

    // zapisz dane w localstorage
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
