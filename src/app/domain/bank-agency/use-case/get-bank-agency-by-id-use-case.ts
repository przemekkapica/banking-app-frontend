import { Injectable } from "@angular/core";
import { UseCase } from "../../../data/common/use-case";
import { BankAgencyRepository } from "../bank-agency-repository";
import { BankAgency } from "../model/bank-agency";


@Injectable({ providedIn: 'root' })
export class GetBankAgencyUseCase implements UseCase<string, BankAgency> {

    constructor(private bankAgencyRepository: BankAgencyRepository) { }

    public async call(request: string): Promise<BankAgency> {
        return this.bankAgencyRepository.getBankAgencyById(request);
    }
}