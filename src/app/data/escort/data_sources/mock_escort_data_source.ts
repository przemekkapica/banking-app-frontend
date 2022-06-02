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
    deleteEscort(escortId: number): void {
        throw new Error("Method not implemented.");
    }

}
