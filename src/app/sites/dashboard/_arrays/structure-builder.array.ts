import { ThemeDict } from 'src/app/shared/components/widgets/my-card-1/_dict/theme.dict';
import { ThemeGenreType } from 'src/app/shared/components/widgets/my-card-1/_models/theme-genre.model';
import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { CardModel } from 'src/app/shared/components/widgets/my-card-1/_models/card.model';

export declare type ShortBtnCodeName = 'transactionAdd'
  | 'fileImport'
  | 'debtAdd'
  | 'transactions'
  | 'categoryAdd'
  | 'categories'
  | 'transactionImport'
  | 'goalAdd'
  | 'goals'
  | 'goalArchives'
  | 'statisticsWeek'
  | 'statisticsMonth'
  | 'statisticsYear'
  | 'debtorAdd'
  | 'debtSelfAdd'
  | 'debts';


export interface StructureBuilderModel {
  header: HeaderModel;
  cards: { [Key: string]: CardModel };
  buttons: {
    displayName: string;
    codeName: ShortBtnCodeName;
  }[];
  chart: {
    id: string;
  }
  features: {
    category: string;
    items: {
      displayName: string;
      codeName: ShortBtnCodeName;
    }[];
  }[];
  goals: {
    caption: string;
    percent: number;
  }[];
  debts: {
    title: string;
    cost: number;
    isMyDebt: boolean;
    repayment: number;
  }[];
}

export const StructureBuilderArray: StructureBuilderModel = {
  header: {
    titles: [{ codeName: 'dashboard', displayName: 'Dashboard' }],
    icon: 'dashboard'
  },
  cards: {
    profit: {
      theme: ThemeDict['profit'],
      score: '8722 zł',
      genre: 'negative' as ThemeGenreType,
      percent: '-5%'
    },
    transactions: {
      theme: ThemeDict['transactions'],
      score: '122',
      genre: 'positive' as ThemeGenreType,
      percent: '12%'
    },
    toll: {
      theme: ThemeDict['toll'],
      score: '3788 zł',
      genre: 'positive' as ThemeGenreType,
      percent: '1%'
    },
    products: {
      theme: ThemeDict['products'],
      score: '13',
      genre: 'negative' as ThemeGenreType,
      percent: '-34%'
    }
  },
  buttons: [
    { displayName: 'Dodaj transakcje', codeName: 'transactionAdd' },
    { displayName: 'Dodaj cel', codeName: 'goalAdd' },
    { displayName: 'Transakcje', codeName: 'transactions' },
    { displayName: 'Importuj plik', codeName: 'fileImport' },
    { displayName: 'Dodaj dług', codeName: 'debtAdd' }
  ],
  chart: {
    id: 'dashboard-chart'
  },
  features: [
    {
      category: 'Transakcje',
      items: [
        { displayName: 'Dodaj transakcje', codeName: 'transactionAdd' },
        { displayName: 'Lista transakcji', codeName: 'transactions' },
        { displayName: 'Importuj transakcję', codeName: 'transactionImport' },
        { displayName: 'Lista kategorii', codeName: 'categories' },
        { displayName: 'Dodaj kategorie', codeName: 'categoryAdd' }
      ]
    },
    {
      category: 'Cele',
      items: [
        { displayName: 'Dodaj cel', codeName: 'goalAdd' },
        { displayName: 'Wszystkie cele', codeName: 'goals' },
        { displayName: 'Archiwalne cele', codeName: 'goalArchives' }
      ]
    },
    {
      category: 'Statystyki',
      items: [
        { displayName: 'Zestawienie tygodniowe', codeName: 'statisticsWeek' },
        { displayName: 'Zestawienie miesięczne', codeName: 'statisticsWeek' },
        { displayName: 'Zestawienie roczne', codeName: 'statisticsYear' }
      ]
    },
    {
      category: 'Pożyczki',
      items: [
        { displayName: 'Dodaj dłużnika', codeName: 'debtorAdd' },
        { displayName: 'Dodaj Twój dług', codeName: 'debtSelfAdd' },
        { displayName: 'Wszystkie długi', codeName: 'debts' },
      ]
    }
  ],
  goals: [
    {
      caption: 'Rower',
      percent: 68
    },
    {
      caption: 'Playstation 5',
      percent: 5
    },
    {
      caption: 'Samochód',
      percent: 88
    }
  ],
  debts: [
    {
      title: 'Marek Mostowiak',
      cost: 300,
      isMyDebt: false,
      repayment: 20
    },
    {
      title: 'Edward Nożycoręki',
      cost: 100,
      isMyDebt: false,
      repayment: 0
    },
    {
      title: 'Kredyt za telefon',
      cost: 2400,
      isMyDebt: true,
      repayment: 800
    }
  ]
}
