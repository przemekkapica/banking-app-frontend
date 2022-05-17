export interface Account {
    id: string;
    name: string;
    moneyAmount: number;
    currency: Currency;
}

export const enum Currency {
    PLN = 'PLN',
    EUR = 'EUR',
    USD = 'USD'
}