import { Inject, Injectable } from "@angular/core";
import { Account } from "src/app/domain/account/model/account";
import { ClientRepository } from "src/app/domain/client/client-repository";
import { Client } from "src/app/domain/client/model/client";
import { ClientDataSource } from "./data_sources/client_data_source";
import { ClientMapper } from "./mappers/client-mapper";

@Injectable({
    providedIn: 'root'
})
export class ClientRepositoryImpl implements ClientRepository {
    clientMapper = new ClientMapper();

    constructor(
        @Inject('ClientDataSource') private clientDataSource: ClientDataSource,
    ) { }

    payInstallment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createAccount(account: Account): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getClientById(id: string): Client {
        throw new Error("Method not implemented.");
    }

    getAllClients(): Promise<Client[]> {
        const clients = this.clientDataSource.getClients();
        
        return clients.then((data) =>
            new Promise((resolve, reject) =>
                resolve(data.map((item) => this.clientMapper.mapTo(this.clientMapper.mapFrom(item))))));
    }

    updateClient(): Client {
        throw new Error("Method not implemented.");
    }
}