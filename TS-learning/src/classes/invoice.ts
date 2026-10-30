import type {HasFormatter} from "../interfaces/HasFormatter"
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  //a method
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
