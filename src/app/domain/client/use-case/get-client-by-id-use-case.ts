import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { ClientRepository } from "../client-repository";
import { Client } from "../model/client";


@Injectable({ providedIn: 'root' })
export class GetClientUseCase implements UseCase<string, Client> {

    constructor(private clientRepository: ClientRepository) { }

    public async call(request: string): Promise<Client> {
        return this.clientRepository.getClientById(request);
    }
}
