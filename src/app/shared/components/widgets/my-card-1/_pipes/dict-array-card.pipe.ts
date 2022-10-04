import { Pipe, PipeTransform } from '@angular/core';
import { CardModel } from 'src/app/shared/components/widgets/my-card-1/_models/card.model';

@Pipe({ name: 'dictArrayCard' })
export class DictArrayCardPipe implements PipeTransform {
  transform(dict: { [Key: string]: CardModel } ): CardModel[] {
    return Object.values(dict);
  }
}
