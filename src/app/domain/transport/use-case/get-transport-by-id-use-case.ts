import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { TransportRepository } from "../transport-repository";
import { Transport } from "../model/transport";


@Injectable({ providedIn: 'root' })
export class GetTransportUseCase implements UseCase<string, Transport> {

    constructor(private serverRepository: TransportRepository) { }

    public async call(request: string): Promise<Transport> {
        return this.serverRepository.getTransportById(request);
    }
}