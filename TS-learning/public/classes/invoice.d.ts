import type { HasFormatter } from "../interfaces/HasFormatter";
export declare class Invoice implements HasFormatter {
    readonly client: string;
    private details;
    amount: number;
    constructor(client: string, details: string, amount: number);
    format(): string;
}
//# sourceMappingURL=invoice.d.ts.map