import { PersonData } from "../../person/model/person";

export interface Employee extends PersonData {
    id: string;
    salary: number;
    post: string;
}