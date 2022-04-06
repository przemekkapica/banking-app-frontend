import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { CEORepository } from "../ceo-repository";
import { CEO } from "../model/ceo";


@Injectable({ providedIn: 'root' })
export class GetCEOUseCase implements UseCase<string, CEO> {

    constructor(private ceoRepository: CEORepository) { }

    public async call(request: string): Promise<CEO> {
        return this.ceoRepository.getCEOById(request);
    }
}
