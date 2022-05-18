import { AccountDTO } from "../../account/dtos/account-dto";
import { DepositDTO } from "../../deposit/dtos/deposit-dto";
import { LoanDTO } from "../../loan/dtos/loan-dto";
import { ClientDTO } from "../dtos/client-dto";

export abstract class ClientDataSource {
    
    abstract getClient(id: string): Promise<ClientDTO>;

    abstract getClients(): Promise<ClientDTO[]>;

    abstract getLoans(clientId: string): Promise<LoanDTO[]>;

    abstract getDeposits(clientId: string): Promise<DepositDTO[]>;

    // abstract getAccounts(clientId: string): Promise<AccountDTO[]>;

    // abstract getAccount(clientId: string, accountId: string): Promise<AccountDTO>;
    
    abstract getLoan(clientId: string, loanId: string): Promise<LoanDTO>;
    
    abstract getDeposit(clientId: string, depositId: string): Promise<DepositDTO>;


    abstract createClient(client: ClientDTO): Promise<void>;
    
    // abstract createAccount(clientId: string, account: AccountDTO): Promise<void>;

    abstract createLoan(clientId: string, loan: LoanDTO): Promise<void>;

    abstract createDeposit(clientId: string, deposit: DepositDTO): Promise<void>;


    abstract updateClient(client: ClientDTO): Promise<ClientDTO>;
    
    // abstract updateAccount(clientId: string, account: AccountDTO): Promise<AccountDTO>;

    abstract updateLoan(clientId: string, loan: LoanDTO): Promise<LoanDTO>;

    abstract updateDeposit(clientId: string, deposit: DepositDTO): Promise<DepositDTO>;


    abstract deleteClient(clientId: string): Promise<void>;

    // abstract deleteAccount(clientId: string, accountId: string): Promise<void>;

    abstract deleteLoan(clientId: string, loanId: string): Promise<void>;

    abstract deleteDeposit(clientId: string, depositId: string): Promise<void>;
}