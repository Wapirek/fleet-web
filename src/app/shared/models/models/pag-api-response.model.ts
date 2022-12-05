import { ResponseModel } from 'src/app/shared/models/models/response.model';

export interface PagApiResponseModel<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: ResponseModel<T>
}
