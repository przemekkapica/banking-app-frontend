import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { TransportRepository } from "../transport-repository";
import { Transport } from "../model/transport";


@Injectable({ providedIn: 'root' })
export class GetAllTransportsUseCase {

    constructor(private serverRepository: TransportRepository) { }

    public async call(): Promise<Transport[]> {
        return await this.serverRepository.getAllTransports();
    }
}