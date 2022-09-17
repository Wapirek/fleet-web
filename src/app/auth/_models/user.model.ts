export class User {
  constructor(
    private username: string,
    private token: string,
    private tokenExpiration: number
  ){}

  get name(): string { return this.username; }

  get tokenFunc(): string | null {
    if (!this.tokenExpiration || new Date() > new Date(this.tokenExpiration)) {
      return null;
    }

    return this.token;
  }
}
