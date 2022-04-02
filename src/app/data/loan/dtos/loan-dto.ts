export interface LoanDTO {
    accountId: string;
    amountToPay: number;
    interestRate: number;
    startDate: Date;
    endDate: Date;
}