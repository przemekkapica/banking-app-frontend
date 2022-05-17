import { Injectable } from "@angular/core";
import { Account, Currency } from "src/app/domain/account/model/account";
import { Loan } from "src/app/domain/loan/model/loan";
import { AccountDTO } from "../../account/dtos/account-dto";
import { DepositDTO } from "../../deposit/dtos/deposit-dto";
import { LoanDTO } from "../../loan/dtos/loan-dto";
import { ClientDTO } from "../dtos/client-dto";
import { ClientDataSource } from "./client_data_source";

@Injectable({ providedIn: 'root' })
export class MockClientDataSource implements ClientDataSource {
    
    getClient(id: string): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }

    getLoans(clientId: string): Promise<LoanDTO[]> {
        throw new Error("Method not implemented.");
    }

    getDeposits(clientId: string): Promise<DepositDTO[]> {
        throw new Error("Method not implemented.");
    }

    getAccounts(clientId: string): Promise<AccountDTO[]> {
        throw new Error("Method not implemented.");
    }

    getLoan(clientId: string, loanId: string): Promise<LoanDTO> {
        throw new Error("Method not implemented.");
    }

    getDeposit(clientId: string, depositId: string): Promise<DepositDTO> {
        throw new Error("Method not implemented.");
    }

    getAccount(clientId: string, accountId: string): Promise<AccountDTO> {
        throw new Error("Method not implemented.");
    }

    createClient(client: ClientDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createAccount(clientId: string, account: AccountDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createLoan(clientId: string, loan: LoanDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createDeposit(clientId: string, deposit: DepositDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updateAccount(clientId: string, account: AccountDTO): Promise<AccountDTO> {
        throw new Error("Method not implemented.");
    }

    updateLoan(clientId: string, loan: LoanDTO): Promise<LoanDTO> {
        throw new Error("Method not implemented.");
    }

    updateDeposit(clientId: string, deposit: DepositDTO): Promise<DepositDTO> {
        throw new Error("Method not implemented.");
    }

    deleteClient(clientId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteAccount(clientId: string, accountId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteLoan(clientId: string, loanId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteDeposit(clientId: string, depositId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getClientById(id: string): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }


    getClients(): Promise<ClientDTO[]> {
        const accounts: Account[] = [
            { id: '1', name: 'Checking account', moneyAmount: 18000, currency: Currency.PLN },
            { id: '2', name: 'Savings account', moneyAmount: 450000, currency: Currency.PLN },
            { id: '3', name: 'Retirement account', moneyAmount: 28000, currency: Currency.EUR },
        ];
        const deposits = [{
            accountId: '1',
            moneyAmount: 200,
            interestRate: 10,
            startDate: new Date(1999, 10, 15, 0, 0, 0),
            endDate: new Date(2023, 10, 15, 0, 0, 0)
        }
            , {
            accountId: '2',
            moneyAmount: 3000,
            interestRate: 500,
            startDate: new Date(2000, 1, 4, 0, 0, 0),
            endDate: new Date(2030, 1, 4, 0, 0, 0)
        }
        ];
        const loans: Loan[] = [{
            accountId: '2',
            amountToPay: 5000,
            interestRate: 300,
            startDate: new Date(2001, 1, 4, 0, 0, 0),
            endDate: new Date(2023, 1, 4, 0, 0, 0)
        }
        ];

        const clients: ClientDTO[] = [{
            id: '1',
            createdDate: new Date(),
            accounts: accounts,
            loans: loans,
            deposits: deposits,
        }
        ];

        return new Promise((resolve, reject) => resolve(clients));
    }


    updateClient(): Promise<ClientDTO> {
        throw new Error("Method not implemented.");
    }


    payInstallment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
