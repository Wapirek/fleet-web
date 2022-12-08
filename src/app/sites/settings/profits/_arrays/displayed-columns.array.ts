import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';

export const DisplayedColumnsArray: DisplayedColumnsModel[] = [
  {
    codeName: 'source',
    name: "Źródło przychodu",
    width: 250
  },
  {
    codeName: 'charge',
    name: "Kwota",
    width: 120
  },
  {
    codeName: 'cashFlowKind',
    name: "Rodzaj",
    width: 120
  },
  {
    codeName: 'periodicityDay',
    name: "Okres",
    width: 120
  },
  {
    codeName: 'nextCashFlow',
    name: "Data następnego wpływu",
    width: 120,
    cellType: 'date'
  }
];
