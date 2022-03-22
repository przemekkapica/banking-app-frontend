import { Account } from "src/app/domain/account/model/account";

export interface ClientDTO {
    id: string;
    createdDate: Date;
    accounts: Array<Account>;
    // TODO: fill properties and add use cases
   //  loans: Array<Loan> = [];
   //  deposits: Array<Deposit> =[];
}