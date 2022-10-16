import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransactionModel } from 'src/app/shared/models/models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionsService {

  getListOfInstance(): Observable<TransactionModel[]> {
    return of([
      {
        id: 1,
        name: 'Netflix',
        type: 'single',
        category: 'Abonament',
        place: 'Netflix',
        cost: 60,
        date: '08.09.2022'
      },
      {
        id: 2,
        name: 'Netflix',
        type: 'single',
        category: 'Abonament',
        place: 'Netflix',
        cost: 60,
        date: '08.09.2022'
      },
      {
        id: 3,
        name: 'Netflix',
        type: 'single',
        category: 'Abonament',
        place: 'Netflix',
        cost: 60,
        date: '08.09.2022'
      }
    ])
  }
}
