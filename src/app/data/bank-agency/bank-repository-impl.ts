import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { BankAgencyRepository } from "src/app/domain/bank-agency/bank-agency-repository";
import { BankAgency } from "src/app/domain/bank-agency/model/bank-agency";
import { BankAgencyMapper } from "./mappers/bank-agency-mapper";

@Injectable({
    providedIn: 'root'
})
export class BankAgencyRepositoryImpl implements BankAgencyRepository {
    bankAgencyMapper = new BankAgencyMapper();

    baseUrl = 'localhost:4200/api';

    constructor(
        private httpClient: HttpClient
    ) { }

    getBankAgencyById(id: string): Promise<BankAgency> {
        return new Promise((resolve, reject) =>
            this.httpClient.get<BankAgency>('${this.baseUrl}/bank-agency/${id}').pipe(map(this.bankAgencyMapper.mapTo)));
    }

    getAllBankAgencys(): Promise<BankAgency[]> {
        throw new Error("Method not implemented.");
    }

    updateBankAgency(): Promise<BankAgency> {
        throw new Error("Method not implemented.");
    }
}