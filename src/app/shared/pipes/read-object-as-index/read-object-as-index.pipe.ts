import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'readObjectAsIndex' })
export class ReadObjectAsIndexPipe implements PipeTransform {
  transform(obj: any, indexName: string): string { return obj[indexName]; }
}
