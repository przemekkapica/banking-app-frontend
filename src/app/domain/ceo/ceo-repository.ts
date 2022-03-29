import { CEO } from './model/ceo';

export abstract class CEORepository {
    abstract getCEOById(id: string): Promise<CEO>;

    abstract getAllCEOs(): Promise<CEO[]>;

    abstract updateCEO(): Promise<CEO>;
}