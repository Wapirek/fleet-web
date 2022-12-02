export interface ResponseModel<T> {
  response: T;
  message: string;
  statusCode: number;
}
