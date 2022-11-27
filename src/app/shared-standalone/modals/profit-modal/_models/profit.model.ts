export interface ProfitModel {
  source: string;
  charge: number;
  periodicityDay: number;
  nextCashFlow?: string | Date;
  cashFlowKind: 'Przychód' | '';
  accountId: number;
}
