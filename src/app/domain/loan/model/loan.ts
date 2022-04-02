export interface Loan {
    accountId: string;
    amountToPay: number;
    interestRate: number;
    startDate: Date;
    endDate: Date;
}