import { Escort } from './model/escort';

export abstract class EscortRepository {
    abstract getEscortById(id: string): Promise<Escort>;

    abstract getAllEscorts(): Promise<Escort[]>;

    abstract updateEscort(): Promise<Escort>;
}