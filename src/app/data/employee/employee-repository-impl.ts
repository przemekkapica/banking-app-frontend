import { Inject, Injectable } from "@angular/core";
import { Account } from "src/app/domain/account/model/account";
import { EmployeeRepository } from "src/app/domain/employee/employee-repository";
import { Employee } from "src/app/domain/employee/model/employee";
import { EmployeeDataSource } from "./data_sources/employee_data_source";
import { EmployeeMapper } from "./mappers/employee-mapper";

@Injectable({
    providedIn: 'root'
})
export class EmployeeRepositoryImpl implements EmployeeRepository {
    employeeMapper = new EmployeeMapper();

    constructor(
        @Inject('EmployeeDataSource') private employeeDataSource: EmployeeDataSource,
    ) { }
    getAllEmployes(): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }

    getEmployeeById(id: string): Employee {
        throw new Error("Method not implemented.");
    }

    // getAllEmployees(): Promise<Employee[]> {
    //     const employees = this.employeeDataSource.getEmployees();
        
    //     return employees.then((data) =>
    //         new Promise((resolve, reject) =>
    //             resolve(data.map((item) => this.employeeMapper.mapTo(this.employeeMapper.mapFrom(item))))));
    // }

    updateEmployee(): Employee {
        throw new Error("Method not implemented.");
    }
}