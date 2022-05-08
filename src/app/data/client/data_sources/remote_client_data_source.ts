import { AccountDTO } from "../../account/dtos/account-dto";
import { ClientDTO } from "../dtos/client-dto";
import { ClientDataSource } from "./client_data_source";

export class RemoteClientDataSource implements ClientDataSource {
    getClientById(id: string): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }

    getAllClients(): Promise<ClientDTO[]> {
        throw new Error("Method not implemented.");
    }

    updateClient(): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }

    payInstallment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    createAccount(account: AccountDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}