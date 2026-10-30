import type {HasFormatter} from "../interfaces/HasFormatter"
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) {}

  //a method
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
