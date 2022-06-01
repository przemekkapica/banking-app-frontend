import { Account } from "src/app/domain/account/model/account";
import { Deposit } from "src/app/domain/deposit/model/deposit";
import { Loan } from "src/app/domain/loan/model/loan";

export interface ClientDTO {
    id: string;
    createdDate: Date;
    accounts: Array<Account>;
    loans: Array<Loan>;
    deposits: Array<Deposit>;
}