import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
// all logic for extends MatPaginator and implement localizationService
export class PaginatorTranslateService {

  use(): MatPaginatorIntl {
    const paginatorHelper = new MatPaginatorIntl();

    paginatorHelper.itemsPerPageLabel = 'Elementów na strone';

    paginatorHelper.firstPageLabel = 'Pierwsza strona';

    paginatorHelper.nextPageLabel = 'Następna strona';

    paginatorHelper.previousPageLabel = 'Poprzednia strona';

    paginatorHelper.lastPageLabel = 'Ostatnia strona';

    paginatorHelper.getRangeLabel = this.polishRangeLabel;

    return paginatorHelper;
  }

  private polishRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 z ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} z ${length}`;
  }
}
