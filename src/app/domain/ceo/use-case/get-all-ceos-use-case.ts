import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { CEORepository } from "../ceo-repository";
import { CEO } from "../model/ceo";


@Injectable({ providedIn: 'root' })
export class GetAllCEOUseCase {

    constructor(private ceoRepository: CEORepository) { }

    public async call(): Promise<CEO[]> {
        return this.ceoRepository.getAllCEOs();
    }
}
