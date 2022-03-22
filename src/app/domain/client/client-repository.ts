import { Client } from './model/client';

export abstract class ClientRepository {
    abstract getClientById(id: string): Promise<Client>;

    abstract getAllClients(): Promise<Client[]>;

    abstract updateClient(): Promise<Client>;
}