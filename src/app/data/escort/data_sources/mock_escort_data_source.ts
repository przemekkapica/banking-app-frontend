import { Injectable } from "@angular/core";
import { EscortDTO } from "../dtos/escort-dto";
import { EscortDataSource } from "./escort_data_source";

@Injectable({ providedIn: 'root' })
export class MockEscortDataSource implements EscortDataSource {
    getEscort(escortId: number): Promise<EscortDTO> {
        const escort :EscortDTO = { escortId: 1, workStatus: 'Active', moneyBalance: 18000 };
        return new Promise((resolve, reject) => resolve(escort));
    }
    getEscorts(): Promise<EscortDTO[]> {
        const escorts: EscortDTO[] = [
            { escortId: 1, workStatus: 'Active', moneyBalance: 18000 },
            { escortId: 2, workStatus: 'Active', moneyBalance: 450000 },
            { escortId: 3, workStatus: 'Active', moneyBalance: 28000 },
        ];
        return new Promise((resolve, reject) => resolve(escorts));
    }
    updateEscort(escort: EscortDTO): Promise<EscortDTO> {
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
