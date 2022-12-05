export interface PagServiceResponseModel<T> {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: T;
}
