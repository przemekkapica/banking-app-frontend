import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { AccountRepository } from "src/app/domain/account/account-repository";
import { Account } from "src/app/domain/account/model/account";
import { AccountMapper } from "./mappers/account-mapper";

@Injectable({
    providedIn: 'root'
})
export class AccountRepositoryImpl implements AccountRepository {
    accountMapper = new AccountMapper();

    baseUrl = 'localhost:4200/api';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAccountById(id: string): Promise<Account> {
        return new Promise((resolve, reject) =>
            this.httpClient.get<Account>('${this.baseUrl}/account/${id}').pipe(map(this.accountMapper.mapTo)));
    }

    getAllAccounts(): Promise<Account[]> {
        throw new Error("Method not implemented.");
    }

    updateAccount(): Promise<Account> {
        throw new Error("Method not implemented.");
    }
}