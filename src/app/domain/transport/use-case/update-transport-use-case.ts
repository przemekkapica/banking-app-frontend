import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { TransportRepository } from "../transport-repository";
import { Transport } from "../model/transport";


@Injectable({ providedIn: 'root' })
export class UpdateTransportUseCase {

    constructor(private serverRepository: TransportRepository) { }

    public async call(): Promise<Transport> {
        return this.serverRepository.updateTransport();
    }
}