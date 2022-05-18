import { Injectable } from "@angular/core";
import { UseCase } from "../../common/use-case";
import { EmployeeRepository } from "../employee-repository";
import { Employee } from "../model/employee";

@Injectable({ providedIn: 'root' })
export class GetAllEmployeesUseCase {

    constructor(private employeeRepository: EmployeeRepository) { }

    public async call(): Promise<Employee[]> {
        return await this.employeeRepository.getAllEmployes();
    }
}