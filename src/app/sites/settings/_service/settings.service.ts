import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCashFlow(): Observable<any> {
    return this.http.post(this.apiUrl + 'userprofile/get-cashflow', {});
  }

  getCashFlowList(): Observable<any> {
    return this.http.get(
      this.apiUrl + 'userprofile/get-cashflows');
  }
}

