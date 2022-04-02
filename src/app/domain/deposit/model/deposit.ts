export interface Deposit {
    accountId: string;
    moneyAmount: number;
    interestRate: number;
    startDate: Date;
    endDate: Date;
}