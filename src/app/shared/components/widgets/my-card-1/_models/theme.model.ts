export declare type ThemeClassType = 'class-green' | 'class-light-blue' | 'class-red';
export declare type ThemeIconStripType = 'attach_money' | 'money_off' | 'payments';


export interface ThemeModel {
  iconStrip: ThemeIconStripType;
  description: string;
  class: ThemeClassType;
}
