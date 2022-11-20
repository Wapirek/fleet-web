import { TransactionModel } from 'src/app/shared/models/models/transaction.model';

export interface TransactionViewModel extends TransactionModel {
  paid: number;
}
