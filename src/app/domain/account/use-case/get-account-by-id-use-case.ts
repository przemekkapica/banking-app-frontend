import { Injectable } from "@angular/core";
import { UseCase } from "../../../data/common/use-case";
import { AccountRepository } from "../account-repository";
import { Account } from "../model/account";


@Injectable({ providedIn: 'root' })
export class GetAccountUseCase implements UseCase<string, Account> {

    constructor(private accountRepository: AccountRepository) { }

    public async call(request: string): Promise<Account> {
        return this.accountRepository.getAccountById(request);
    }
}