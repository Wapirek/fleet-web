import { ThemeDict } from 'src/app/shared/components/widgets/my-card-1/_dict/theme.dict';
import { ThemeGenreType } from 'src/app/shared/components/widgets/my-card-1/_models/theme-genre.model';
import { HeaderModel } from 'src/app/shared/models/structure-html/header.model';
import { CardModel } from 'src/app/shared/components/widgets/my-card-1/_models/card.model';

export interface StructureBuilderModel {
  header: HeaderModel;
  cards: { [Key: string]: CardModel };
  buttons: string[];
  chart: {
    id: string;
  }
  features: {
    category: string;
    items: string[]
  }[];
  goals: {
    caption: string;
    percent: number;
  }[];
}

export const StructureBuilderHelper: StructureBuilderModel = {
  header: {
    title: 'Dashboard',
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
    'Nowa transakcja', 'Dodaj cel', 'Transakcje', 'Importuj plik', 'Dodaj dług'
  ],
  chart: {
    id: 'dashboard-chart'
  },
  features: [
    {
      category: 'Transakcje',
      items: [
        'Nowa transakcja', 'Edycja transakcji', 'Historia transakcji', 'Kategorie transakcji',
        'Zarządzanie kategoriami', 'Nowa kategoria', 'Ustawienia transakcji', 'Importuj plik'
      ]
    },
    {
      category: 'Cele',
      items: [
        'Nowy cel', 'Edycja celu', 'Archwialne cele', 'Cele długoterminowe'
      ]
    },
    {
      category: 'Statystyki',
      items: [
        'Statystyka miesięczna', 'Statystyka roczna', 'Wskaźnik inflacji'
      ]
    },
    {
      category: 'Pożyczki',
      items: [
        'Nowy dług', 'Lista dłuźników', 'Nowa wpłata'
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
  ]
}
