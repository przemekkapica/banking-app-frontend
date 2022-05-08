import { Injectable } from "@angular/core";
import { Account, Currency } from "src/app/domain/account/model/account";
import { Loan } from "src/app/domain/loan/model/loan";
import { AccountDTO } from "../../account/dtos/account-dto";
import { ClientDTO } from "../dtos/client-dto";
import { ClientDataSource } from "./client_data_source";

@Injectable({
    providedIn: 'root'
})
export class MockClientDataSource implements ClientDataSource {
    getClientById(id: string): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }

    getAllClients(): Promise<ClientDTO[]> {
        const accounts: Account[] = [
            { id: '1', moneyAmount: 18000, currency: Currency.PLN },
            { id: '2', moneyAmount: 450000, currency: Currency.PLN },
        ];
        const deposits = [{
            accountId: '1',
            moneyAmount: 200,
            interestRate: 10,
            startDate: new Date(1999, 10, 15, 0, 0, 0),
            endDate: new Date(2023, 10, 15, 0, 0, 0)
        }, {
            accountId: '2',
            moneyAmount: 3000,
            interestRate: 500,
            startDate: new Date(2000, 1, 4, 0, 0, 0),
            endDate: new Date(2030, 1, 4, 0, 0, 0)
        }];
        const loans: Loan[] = [{
            accountId: '2',
            amountToPay: 5000,
            interestRate: 300,
            startDate: new Date(2001, 1, 4, 0, 0, 0),
            endDate: new Date(2023, 1, 4, 0, 0, 0)
        }];

        const clients: ClientDTO[] = [{
            id: '1',
            createdDate: new Date(),
            accounts: accounts,
            loans: loans,
            deposits: deposits,
        }];
        
        return new Promise((resolve, reject) => resolve(clients));
    }

    updateClient(): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }

    payInstallment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createAccount(account: AccountDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}