import { TransactionModel } from 'src/app/shared/models/models/transaction.model';

export const InitTransactionHelper: TransactionModel = {
  id: -1,
  transactionName: '',
  transactionDate: new Date(),
  shop: '',
  currency: 'PLN',
  isDefine: false,
  products: []
};
