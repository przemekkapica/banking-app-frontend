import { Inject, Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { ClientRepository } from "../client-repository";
import { Client } from "../model/client";


@Injectable({ providedIn: 'root' })
export class UpdateClientUseCase {
    constructor(private clientRepository: ClientRepository) { }

    public async call(): Promise<Client> {
        return await this.clientRepository.updateClient();
    }
}
