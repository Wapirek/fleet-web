import { Component } from '@angular/core';
import { ThemeDict } from 'src/app/shared/components/widgets/my-card-1/_dict/theme.dict';
import { ThemeGenreType } from 'src/app/shared/components/widgets/my-card-1/_models/theme-genre.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  skeletonHtml = {
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
      }
    },
    buttons: [
      'Nowa transakcja', 'Dodaj cel', 'Transakcje', 'Importuj plik', 'Dodaj dług'
    ],
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
    ]
  };

}
