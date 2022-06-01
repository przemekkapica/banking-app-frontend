import { Injectable } from "@angular/core";
import { EmployeeDTO } from "../dtos/employee-dto";
import { EmployeeDataSource } from "./employee_data_source";

@Injectable({ providedIn: 'root' })
export class MockEmployeeDataSource implements EmployeeDataSource {
    
    getEmployee(id: string): Promise<EmployeeDTO> {
        throw new Error("Method not implemented.");
    }

    getEmployees(): Promise<EmployeeDTO[]> {
        throw new Error("Method not implemented.");
    }

    getEmployeeById(id: string): Promise<EmployeeDTO> {
        throw new Error("Method not implemented.");
    }

    createEmployee(client: EmployeeDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updateEmployee(): Promise<EmployeeDTO> {
        throw new Error("Method not implemented.");
    }

    deleteEmployee(clientId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
