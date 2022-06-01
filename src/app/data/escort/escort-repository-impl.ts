import { Inject, Injectable } from "@angular/core";
import { EscortRepository } from "src/app/domain/escort/escort-repository";
import { Escort } from "src/app/domain/escort/model/escort";
import { EscortDataSource } from "./data_sources/escort_data_source";
import { EscortMapper } from "./mappers/escort-mapper";

@Injectable({
    providedIn: 'root'
})
export class EscortRepositoryImpl implements EscortRepository {
    escortMapper = new EscortMapper();

    constructor(
        @Inject('EscortDataSource') private escortDataSource: EscortDataSource,
    ) { }

    getEscortById(escortId: number): Escort {
        throw new Error("Method not implemented.");
    }

    getAllEscorts(): Promise<Escort[]> {
        const escorts = this.escortDataSource.getEscorts();
        
        return escorts.then((escort) =>
            new Promise((resolve, reject) =>
                resolve(escort.map((item) => this.escortMapper.mapTo(this.escortMapper.mapFrom(item))))));
    }

    updateEscort(): Escort {
        throw new Error("Method not implemented.");
    }
    deleteEscort(): Escort {
        throw new Error("Method not implemented.");
    }
}