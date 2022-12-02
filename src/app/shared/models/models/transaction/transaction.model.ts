import { ProductModel } from 'src/app/shared/models/models/transaction/product.model';

export interface TransactionModel {
  id: number;
  transactionName: string;
  transactionDate: Date | string;
  shop: string;
  recipe?: string;
  isDefine: boolean;
  currency: string;
  products: ProductModel[];
}
