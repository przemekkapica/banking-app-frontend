import { Account } from './model/account';
export abstract class ClientRepository {
    abstract getClientById(id: string): Promise<Account>;

    abstract getAllClients(): Promise<Account[]>;

    abstract updateClient(): Promise<Account>;
}