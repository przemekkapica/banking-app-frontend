export interface Account {
    id: string;
    moneyAmount: number;
    currency: Currency.PLN;
}

export const enum Currency {
    PLN = 'PLN',
    EUR = 'EUR',
    USD = 'USD'
}