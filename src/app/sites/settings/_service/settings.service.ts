import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { ResponseModel } from 'src/app/shared/models/models/response.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCashFlow(): Observable<any> {
    return this.http.post(this.apiUrl + 'userprofile/get-cashflow', {});
  }

  // pobiera liste przyplywow z api,
  // zwraca gotowa liste
  getCashFlowList = (): Observable<ProfitModel[]> => this.http
    .get<ResponseModel<ProfitModel[]>>(this.apiUrl + 'userprofile/get-cashflows')
    .pipe(map(r => r.response))
}

