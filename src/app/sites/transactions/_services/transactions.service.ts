import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransactionViewModel } from 'src/app/sites/transactions/_models/transaction-view.model';

@Injectable({ providedIn: 'root' })
export class TransactionsService {

  getListOfInstance(): Observable<TransactionViewModel[]> {
    return of([
      {
        id: 1,
        transactionName: 'Netflix',
        transactionDate: '10.11.2022',
        shop: 'Netflix',
        paid: 60,
        isDefine: false,
        recipe: '',
        currency: 'PLN',
        products: []
      },
    ])
  }
}
