import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { ServerRepository } from "../server-repository";
import { Server } from "../model/server";


@Injectable({ providedIn: 'root' })
export class GetAllServersUseCase {

    constructor(private serverRepository: ServerRepository) { }

    public async call(): Promise<Server[]> {
        return await this.serverRepository.getAllServers();
    }
}