import { Account } from '../account/model/account';
import { Client } from './model/client';

export abstract class ClientRepository {
    abstract getClientById(id: string): Promise<Client>;

    abstract getAllClients(): Promise<Client[]>;

    abstract updateClient(): Promise<Client>;

    abstract payInstallment(id: string): Promise<void>;

    abstract createAccount(account: Account): Promise<void>;
}