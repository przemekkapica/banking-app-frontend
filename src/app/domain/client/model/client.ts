import { Account } from "../../account/model/account";
import { Deposit } from "../../deposit/model/deposit";
import { Loan } from "../../loan/model/loan";
import { PersonData } from "../../person/model/person";

export interface Client {
     id: string;
     accounts: Array<Account>;
     loans?: Array<Loan>; // TODO: remove nullable
     deposits?: Array<Deposit>;
     personData?: PersonData;
}