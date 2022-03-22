import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ClientRepository } from "src/app/domain/client/client-repository";
import { Client } from "src/app/domain/client/model/client";
import { ClientMapper } from "./mappers/client-mapper";

@Injectable({
    providedIn: 'root'
})
export class ClientRepositoryImpl implements ClientRepository {
    clientMapper = new ClientMapper();

    baseUrl = 'localhost:4200/api';

    constructor(
        private httpClient: HttpClient
    ) { }

    getClientById(id: string): Promise<Client> {
        return new Promise((resolve, reject) =>
            this.httpClient.get<Client>('${this.baseUrl}/client/${id}').pipe(map(this.clientMapper.mapTo)));
    }

    getAllClients(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }

    updateClient(): Promise<Client> {
        throw new Error("Method not implemented.");
    }
}