export interface DisplayedColumnsModel {
  codeName: string;
  name: string;
  width: number;
  order: number;
}

export const DisplayedColumnsArray: DisplayedColumnsModel[] = [
  {
    codeName: 'id',
    name: "Number",
    width: 110,
    order: 0
  },
  {
    codeName: 'name',
    name: "Nazwa",
    width: 200,
    order: 1
  },
  {
    codeName: 'type',
    name: "Typ transakcji",
    width: 200,
    order: 2
  },
  {
    codeName: 'category',
    name: "Kategoria",
    width: 220,
    order: 3
  },
  {
    codeName: 'place',
    name: "Miejsce transakcji",
    width: 250,
    order: 4
  },
  {
    codeName: 'cost',
    name: "Kwota",
    width: 110,
    order: 5
  },
  {
    codeName: 'date',
    name: "Data",
    width: 150,
    order: 6
  }
];
