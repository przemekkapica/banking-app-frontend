import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { AccountRepository } from "../account-repository";
import { Account } from "../model/account";


@Injectable({ providedIn: 'root' })
export class UpdateAccountUseCase {

    constructor(private accountRepository: AccountRepository) { }

    public async call(): Promise<Account> {
        return this.accountRepository.updateAccount();
    }
}