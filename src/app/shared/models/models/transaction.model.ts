export declare type TransactionTypeModel = 'single' | 'list';

export interface TransactionModel {
  id: number;
  name: string;
  type: TransactionTypeModel;
  category: string;
  place: string;
  cost: number;
  date: string;
}
