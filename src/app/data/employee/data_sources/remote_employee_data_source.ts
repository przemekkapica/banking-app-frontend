import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { NetworkConfiguration } from "src/app/core/config/network_configuration";
import { EmployeeDTO } from "../dtos/employee-dto";
import { EmployeeDataSource } from "./employee_data_source";

export class RemoteEmployeeDataSource implements EmployeeDataSource {

    constructor(private http: HttpClient) {}    

    getEmployee(clientId: string): Promise<EmployeeDTO> {
        return lastValueFrom(this.http.get<EmployeeDTO>(NetworkConfiguration.getEmployee(clientId)));
    }

    getEmployees(): Promise<EmployeeDTO[]> {
        return lastValueFrom(this.http.get<EmployeeDTO[]>(NetworkConfiguration.getEmployees()));
    }

    createEmployee(employee: EmployeeDTO): Promise<void> {
        return lastValueFrom(this.http.post<void>(NetworkConfiguration.createEmployee(), employee));
    }

    updateEmployee(employee: EmployeeDTO): Promise<EmployeeDTO> {
        return lastValueFrom(this.http.put<EmployeeDTO>(NetworkConfiguration.updateEmployee(), employee));
    }

    deleteEmployee(employeeId: string): Promise<void> {
        return lastValueFrom(this.http.delete<void>(NetworkConfiguration.deleteEmployee(employeeId)));
    }
}