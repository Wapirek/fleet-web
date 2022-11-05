export interface AuthResponseModel {
  response: {
    email: string;
    token: string;
  },
  statusCode: number;
  message: string;
}
