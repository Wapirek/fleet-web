import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { map } from 'rxjs/operators';
import { PagApiResponseModel } from 'src/app/shared/models/models/pag-api-response.model';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';
import { PagServiceResponseModel } from 'src/app/shared/models/models/pag-service-response.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCashFlow(): Observable<any> {
    return this.http.post(this.apiUrl + 'userprofile/get-cashflow', {});
  }

  // pobiera liste przyplywow z api, zwraca gotowa liste
  getCashFlowList = (state: StateTableModel): Observable<PagServiceResponseModel<ProfitModel[]>> => this.http
    .get<PagApiResponseModel<ProfitModel[]>>(this.apiUrl + 'userprofile/get-cashflows', {
      params: { accId: 1, pageSize: state.pageSize, pageIndex: state.pageIndex + 1 }
    })
    .pipe(
      map(val => {
        return {
          pageIndex: val.pageIndex,
          pageSize: val.pageSize,
          count: val.count,
          data: val.data.response
        } as PagServiceResponseModel<ProfitModel[]>
      })
    )
}

