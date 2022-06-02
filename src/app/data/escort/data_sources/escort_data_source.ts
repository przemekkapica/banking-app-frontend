import { EscortDTO } from "../dtos/escort-dto";

export abstract class EscortDataSource {
    
    abstract getEscort(escortId: number): Promise<EscortDTO>;
    abstract getEscorts(): Promise<EscortDTO[]>;
    abstract updateEscort(escort: EscortDTO): Promise<EscortDTO>;
    abstract deleteEscort(escortId: number): void;
}