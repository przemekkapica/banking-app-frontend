import { Injectable } from "@angular/core";
import { UseCase } from "../../../data/common/use-case";
import { ServerRepository } from "../server-repository";
import { Server } from "../model/server";


@Injectable({ providedIn: 'root' })
export class GetServerUseCase implements UseCase<string, Server> {

    constructor(private serverRepository: ServerRepository) { }

    public async call(request: string): Promise<Server> {
        return this.serverRepository.getServerById(request);
    }
}