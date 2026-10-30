export class Invoice {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //a method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//# sourceMappingURL=invoice.js.map