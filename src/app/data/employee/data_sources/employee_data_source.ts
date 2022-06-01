import { EmployeeDTO } from "../dtos/employee-dto";

export abstract class EmployeeDataSource {
    
    abstract getEmployee(id: string): Promise<EmployeeDTO>;

    abstract getEmployees(): Promise<EmployeeDTO[]>;

    abstract createEmployee(employee: EmployeeDTO): Promise<void>;

    abstract updateEmployee(employee: EmployeeDTO): Promise<EmployeeDTO>;

    abstract deleteEmployee(employeeId: string): Promise<void>;
}