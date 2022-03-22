import { Employee } from './model/employee';

export abstract class EmployeeRepository {
    abstract getEmployeeById(id: string): Promise<Employee>;

    abstract getAllEmployes(): Promise<Employee[]>;

    abstract updateEmployee(): Promise<Employee>;
}