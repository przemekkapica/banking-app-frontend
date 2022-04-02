import { Account } from "../../account/model/account";
import { Deposit } from "../../deposit/model/deposit";
import { Loan } from "../../loan/model/loan";
import { Person } from "../../person/model/person";

export interface Client extends Person {
     accounts: Array<Account>;
     loans: Array<Loan>;
     deposits: Array<Deposit>;
}