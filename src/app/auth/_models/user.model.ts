export class User {
  constructor(
    private username: string,
    private accountId: number,
    private token: string,
    private tokenExpiration: number
  ){}

  get name(): string { return this.username; }

  get id(): number { return this.accountId; }

  get tokenFunc(): string | null {
    if (!this.tokenExpiration || new Date() > new Date(this.tokenExpiration)) {
      return null;
    }

    return this.token;
  }
}
