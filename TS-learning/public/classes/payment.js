export class Payment {
    recipient;
    details;
    amount;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //a method
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
//# sourceMappingURL=payment.js.map