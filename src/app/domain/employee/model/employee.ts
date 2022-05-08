import { PersonData } from "../../person/model/person";

export interface Employee extends PersonData {
    salary: number;
    post: string;
}