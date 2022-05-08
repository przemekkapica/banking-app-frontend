import { AccountDTO } from "../../account/dtos/account-dto";
import { ClientDTO } from "../dtos/client-dto";

export abstract class ClientDataSource {
    abstract getClientById(id: string): Promise<ClientDTO>;

    abstract getAllClients(): Promise<ClientDTO[]>;

    abstract updateClient(): Promise<ClientDTO>;

    abstract payInstallment(id: string): Promise<void>;

    abstract createAccount(account: AccountDTO): Promise<void>;
}