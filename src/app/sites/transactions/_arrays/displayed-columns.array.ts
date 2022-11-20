export interface DisplayedColumnsModel {
  codeName: string;
  name: string;
  width: number;
  order: number;
}

export const DisplayedColumnsArray: DisplayedColumnsModel[] = [
  {
    codeName: 'id',
    name: "Numer",
    width: 60,
    order: 0
  },
  {
    codeName: 'transactionName',
    name: "Nazwa",
    width: 200,
    order: 1
  },
  {
    codeName: 'category',
    name: "Kategoria",
    width: 150,
    order: 3
  },
  {
    codeName: 'shop',
    name: "Sklep",
    width: 250,
    order: 4
  },
  {
    codeName: 'paid',
    name: "Kwota",
    width: 110,
    order: 5
  },
  {
    codeName: 'transactionDate',
    name: "Data",
    width: 150,
    order: 6
  }
];
