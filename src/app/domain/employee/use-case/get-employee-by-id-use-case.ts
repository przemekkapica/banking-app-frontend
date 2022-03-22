import { Injectable } from "@angular/core";
import { UseCase } from "../../../data/common/use-case";
import { EmployeeRepository } from "../employee-repository";
import { Employee } from "../model/employee";

@Injectable({ providedIn: 'root' })
export class GetEmployeeUseCase implements UseCase<string, Employee> {

    constructor(private employeeRepository: EmployeeRepository) { }

    public async call(request: string): Promise<Employee> {
        return this.employeeRepository.getEmployeeById(request);
    }
}
