import { Account } from './model/account';
export abstract class AccountRepository {
    abstract getAccountById(id: string): Promise<Account>;

    abstract getAllAccounts(): Promise<Account[]>;

    abstract updateAccount(): Promise<Account>;
}