import { Component, Input } from '@angular/core';
import { ThemeModel } from 'src/app/shared/components/widgets/my-card-1/_models/theme.model';
import { ThemeGenreType } from 'src/app/shared/components/widgets/my-card-1/_models/theme-genre.model';

@Component({
  selector: 'app-my-card-1',
  templateUrl: './my-card-1.component.html',
  styleUrls: ['./my-card-1.component.scss']
})
export class MyCard1Component {
  @Input() theme!: ThemeModel;
  @Input() score!: string;
  @Input() genre!: ThemeGenreType;
  @Input() percent!: string;
}
