import { ThemeModel } from 'src/app/shared/components/widgets/my-card-1/_models/theme.model';

export const ThemeDict: { [Key: string]: ThemeModel } = {
  profit: {
    description: 'Przychody',
    class: 'class-green',
    iconStrip: 'attach_money'
  },
  transactions: {
    description: 'Liczba transakcji',
    class: 'class-light-blue',
    iconStrip: 'payments'
  },
  toll: {
    description: 'Wydatki',
    class: 'class-red',
    iconStrip: 'money_off'
  }
};
