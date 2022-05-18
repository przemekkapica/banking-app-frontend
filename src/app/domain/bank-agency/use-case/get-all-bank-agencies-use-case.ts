import { Injectable } from "@angular/core";
import { BankAgencyRepository } from "../bank-agency-repository";
import { BankAgency } from "../model/bank-agency";


@Injectable({ providedIn: 'root' })
export class GetAllBankAgenciesUseCase  {

    constructor(private bankAgencyRepository: BankAgencyRepository) { }

    public async call(): Promise<BankAgency[]> {
        return this.bankAgencyRepository.getAllBankAgencys();
    }
}