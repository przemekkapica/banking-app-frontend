import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { BankAgencyRepository } from "../bank-agency-repository";
import { BankAgency } from "../model/bank-agency";


@Injectable({ providedIn: 'root' })
export class GetBankAgencyUseCase {

    constructor(private bankAgencyRepository: BankAgencyRepository) { }

    public async call(): Promise<BankAgency> {
        return this.bankAgencyRepository.updateBankAgency();
    }
}