import { BankAgency } from './model/bank-agency';

export abstract class BankAgencyRepository {
    abstract getBankAgencyById(id: string): Promise<BankAgency>;

    abstract getAllBankAgencys(): Promise<BankAgency[]>;

    abstract updateBankAgency(): Promise<BankAgency>;
}