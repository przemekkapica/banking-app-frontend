import { Employee } from './model/employee';

export abstract class EmployeeRepository {
    abstract getEmployeeById(id: string): Employee;

    abstract getAllEmployes(): Promise<Employee[]>;

    abstract updateEmployee(): Employee;
}