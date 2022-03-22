import { Account } from "../../account/model/account";
import { Person } from "../../person/model/person";

export interface Client extends Person {
     accounts: Array<Account>;
     // TODO: fill properties and add use cases
    //  loans: Array<Loan> = [];
    //  deposits: Array<Deposit> =[];
}