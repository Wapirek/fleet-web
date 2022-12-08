export interface DisplayedColumnsModel {
  codeName: string;
  name: string;
  width: number;
  order?: number;
  cellType?: 'date' | '' | null;
}
