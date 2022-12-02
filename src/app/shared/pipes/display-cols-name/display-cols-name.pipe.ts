import { Pipe, PipeTransform } from '@angular/core';
import { DisplayedColumnsModel } from 'src/app/sites/transactions/_arrays/displayed-columns.array';

@Pipe({ name: 'DisplayColsName' })
export class DisplayColsNamePipe implements PipeTransform {
  /*
  * Pipe wykorzystywany do wybierania wylacznie samej nazwy
  * z całego obiektu informacji o kolumnie
  * */
  transform(cols: DisplayedColumnsModel[]): string[] { return  cols.map(c => c.codeName) };
}
