import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProfitModel } from 'src/app/shared/models/models/settings/profit.model';
import { map } from 'rxjs/operators';
import { PagApiResponseModel } from 'src/app/shared/models/models/pag-api-response.model';
import { StateTableModel } from 'src/app/shared/models/models/state-table.model';
import { PagServiceResponseModel } from 'src/app/shared/models/models/pag-service-response.model';
import { AuthService } from 'src/app/auth/_services/auth.service';
import { ResponseModel } from 'src/app/shared/models/models/response.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // dodaj element przyplywu do api, zwraca gotowy przychod
  addCashFlow = (profit: ProfitModel): Observable<ProfitModel> => this.http
    .post<ResponseModel<ProfitModel>>(this.apiUrl + 'userprofile/add-cashflow', {
      accountId: this.authService.user.getValue()?.id ?? -1,
      cashFlowKind: 'Przychód',
      source: profit.source,
      charge: +profit.charge,
      nextCashFlow: profit.nextCashFlow,
      periodicityDay: profit.periodicityDay
    } as ProfitModel)
    .pipe(map(val => val.response))

  // kasowanie przychodu
  deleteCashFlow = (source: string): Observable<string> => this.http
    .post<ResponseModel<any>>(this.apiUrl + 'userprofile/delete-cashflow', {
      accountId: this.authService.user.getValue()?.id ?? -1,
      source
    }).pipe(map(() => `${source} usuniety`))

  // pobiera liste przyplywow z api, zwraca gotowa liste
  getCashFlowList = (state: StateTableModel): Observable<PagServiceResponseModel<ProfitModel[]>> => this.http
    .get<PagApiResponseModel<ProfitModel[]>>(this.apiUrl + 'userprofile/get-cashflows', {
      params: { accId: this.authService.user.getValue()?.id ?? -1, pageSize: state.pageSize, pageIndex: state.pageIndex + 1 }
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

  updateCashFlow = (profit: ProfitModel): Observable<ProfitModel> => this.http
    .post<ResponseModel<ProfitModel>>(this.apiUrl + 'userprofile/update-cashflow', {
      accountId: Number(this.authService.user.getValue()?.id ?? -1),
      cashFlowKind: profit.cashFlowKind ?? 'Przychód',
      source: profit.source,
      charge: +profit.charge,
      nextCashFlow: profit.nextCashFlow,
      periodicityDay: profit.periodicityDay
    }).pipe(map(val => val.response))
}

