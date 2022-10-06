export declare type ThemeClassType = 'class-green' | 'class-light-blue' | 'class-red' | 'class-pastel-pink';
export declare type ThemeIconStripType = 'attach_money' | 'money_off' | 'payments' | 'shopping_basket';

export interface ThemeModel {
  iconStrip: ThemeIconStripType;
  description: string;
  class: ThemeClassType;
}
