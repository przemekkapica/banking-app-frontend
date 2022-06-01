import { PersonData } from "../../person/model/person";

export interface Escort extends PersonData {
    moneyBalance: number;
    workStatus: string;
    escortId: number;
} 