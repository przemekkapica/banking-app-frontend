import { PersonData } from "../../person/model/person";

export interface Escort {
    moneyBalance: number;
    workStatus: string;
    escortId: number;
    personData?: PersonData;
} 