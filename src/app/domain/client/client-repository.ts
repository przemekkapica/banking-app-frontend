import { Account } from '../account/model/account';
import { Client } from './model/client';

export abstract class ClientRepository {
    public abstract getClientById(id: string): Client;

    public abstract getAllClients(): Promise<Client[]>;

    public abstract updateClient(): Client;

    public abstract payInstallment(id: string): void;

    public abstract createAccount(account: Account): void;
}