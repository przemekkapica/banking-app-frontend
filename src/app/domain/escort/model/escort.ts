import { Person } from "../../person/model/person";

export interface Escort extends Person {
    moneyBalance: number;
    workStatus: string;
    escortId: number;
}