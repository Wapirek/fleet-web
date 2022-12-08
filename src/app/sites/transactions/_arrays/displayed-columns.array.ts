import { DisplayedColumnsModel } from 'src/app/shared/models/structure-html/displayed-columns.model';

export const DisplayedColumnsArray: DisplayedColumnsModel[] = [
  {
    codeName: 'id',
    name: "Numer",
    width: 60,
  },
  {
    codeName: 'transactionName',
    name: "Nazwa",
    width: 200,
  },
  {
    codeName: 'category',
    name: "Kategoria",
    width: 150,
  },
  {
    codeName: 'shop',
    name: "Sklep",
    width: 250,
  },
  {
    codeName: 'paid',
    name: "Kwota",
    width: 110,
  },
  {
    codeName: 'transactionDate',
    name: "Data",
    width: 150
  }
];
