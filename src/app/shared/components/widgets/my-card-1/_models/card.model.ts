import { ThemeModel } from 'src/app/shared/components/widgets/my-card-1/_models/theme.model';
import { ThemeGenreType } from 'src/app/shared/components/widgets/my-card-1/_models/theme-genre.model';

export interface CardModel {
  theme: ThemeModel;
  score: string;
  genre: ThemeGenreType;
  percent: string;
}
