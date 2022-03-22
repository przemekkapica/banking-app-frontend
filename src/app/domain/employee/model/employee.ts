import { Person } from "../../person/model/person";

export interface Employee extends Person {
    salary: number;
    post: string;
}