import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';

export const DisplayedColumnsArray: DisplayedColumnsModel[] = [
  {
    codeName: 'charge',
    name: "Kwota",
    width: 120,
    order: 0
  },
  {
    codeName: 'cashFlowKind',
    name: "Rodzaj",
    width: 120,
    order: 1
  },
  {
    codeName: 'nextCashFlow',
    name: "Data następnego wpływu",
    width: 120,
    order: 3
  },
  {
    codeName: 'periodicityDay',
    name: "Okres",
    width: 120,
    order: 4
  },
  {
    codeName: 'source',
    name: "Źródło przychodu",
    width: 300,
    order: 5
  }
];
