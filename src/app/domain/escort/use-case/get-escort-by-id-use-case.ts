import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { EscortRepository } from "../escort-repository";
import { Escort } from "../model/escort";

@Injectable({ providedIn: 'root' })
export class GetEscortUseCase implements UseCase<string, Escort> {

    constructor(private escortRepository: EscortRepository) { }

    public async call(request: string): Promise<Escort> {
        return this.escortRepository.getEscortById(request);
    }
}
