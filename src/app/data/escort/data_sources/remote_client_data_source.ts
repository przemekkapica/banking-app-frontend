import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { NetworkConfiguration } from "src/app/core/config/network_configuration";
import { DepositDTO } from "../../deposit/dtos/deposit-dto";
import { LoanDTO } from "../../loan/dtos/loan-dto";
import { ClientDTO } from "../dtos/client-dto";
import { ClientDataSource } from "./client_data_source";

export class RemoteClientDataSource implements ClientDataSource {

    constructor(private http: HttpClient) {}    

    getClient(clientId: string): Promise<ClientDTO> {
        return lastValueFrom(this.http.get<ClientDTO>(NetworkConfiguration.getClient(clientId)));
    }

    getClients(): Promise<ClientDTO[]> {
        return lastValueFrom(this.http.get<ClientDTO[]>(NetworkConfiguration.getClients()));
    }

    getLoans(clientId: string): Promise<LoanDTO[]> {
        return lastValueFrom(this.http.get<LoanDTO[]>(NetworkConfiguration.getLoans(clientId)));
    }

    getDeposits(clientId: string): Promise<DepositDTO[]> {
        return lastValueFrom(this.http.get<DepositDTO[]>(NetworkConfiguration.getDeposits(clientId)));
    }

    getLoan(clientId: string, loanId: string): Promise<LoanDTO> {
        return lastValueFrom(this.http.get<LoanDTO>(NetworkConfiguration.getLoan(clientId, loanId)));
    }

    getDeposit(clientId: string, depositId: string): Promise<DepositDTO> {
        return lastValueFrom(this.http.get<DepositDTO>(NetworkConfiguration.getDeposit(clientId, depositId)));
    }

    createClient(client: ClientDTO): Promise<void> {
        return lastValueFrom(this.http.post<void>(NetworkConfiguration.createClient(), client));
    }

    createLoan(clientId: string, loan: LoanDTO): Promise<void> {
        return lastValueFrom(this.http.post<void>(NetworkConfiguration.createLoan(clientId), loan));
    }

    createDeposit(clientId: string, deposit: DepositDTO): Promise<void> {
        return lastValueFrom(this.http.post<void>(NetworkConfiguration.createDeposit(clientId), deposit));
    }

    updateClient(client: ClientDTO): Promise<ClientDTO> {
        return lastValueFrom(this.http.put<ClientDTO>(NetworkConfiguration.updateClient(), client));
    }

    updateLoan(clientId: string, loan: LoanDTO): Promise<LoanDTO> {
        return lastValueFrom(this.http.put<LoanDTO>(NetworkConfiguration.updateLoan(clientId), loan));
    }

    updateDeposit(clientId: string, deposit: DepositDTO): Promise<DepositDTO> {
        return lastValueFrom(this.http.put<DepositDTO>(NetworkConfiguration.updateDeposit(clientId), deposit));
    }

    deleteClient(clientId: string): Promise<void> {
        return lastValueFrom(this.http.delete<void>(NetworkConfiguration.deleteClient(clientId)));
    }

    deleteLoan(clientId: string, loanId: string): Promise<void> {
        return lastValueFrom(this.http.delete<void>(NetworkConfiguration.deleteLoan(clientId, loanId)));
    }

    deleteDeposit(clientId: string, depositId: string): Promise<void> {
        return lastValueFrom(this.http.delete<void>(NetworkConfiguration.deleteDeposit(clientId, depositId)));
    }
}