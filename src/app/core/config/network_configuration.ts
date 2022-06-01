export class NetworkConfiguration {
    static API_URL = 'localhost:8080';

    //CLIENT

    // Client paths - GET
    static getClients() {
        return '${API_URL}/clients'
    }
    static getClient(clientId: string) {
        return '${API_URL}/clients/' + clientId;
    }
    static getLoans(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/loans';
    }
    static getLoan(clientId: string, loanId: string) {
        return '${API_URL}/clients/' + clientId + '/loans/' + loanId;
    }
    static getDeposits(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/deposits';
    }
    static getDeposit(clientId: string, depositId: string) {
        return '${API_URL}/clients/' + clientId + 'deposits/' + depositId;
    }
    // Client paths - POST
    static createClient() {
        return '${API_URL}/clients';
    }
    static createLoan(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/loans';
    }
    static createDeposit(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/deposits';
    }
    // Client paths - PUT
    static updateClient() {
        return '${API_URL}/clients/{clientId}';
    }
    static updateLoan(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/loans/{loanId}';
    }
    static updateDeposit(clientId: string) {
        return '${API_URL}/clients/' + clientId + '/deposits/{depositId}';
    }
    // Client paths - DELETE
    static deleteClient(clientId: string) {
        return '${API_URL}/clients/' + clientId;
    }
    static deleteLoan(clientId: string, loanId: string) {
        return '${API_URL}/clients/' + clientId + '/loans/' + loanId;
    }
    static deleteDeposit(clientId: string, depositId: string) {
        return '${API_URL}/clients/' + clientId + '/deposits/' + depositId;
    }

    // EMPLOYEE

    // Employee paths - GET
    static getEmployees() {
        return '${API_URL}/employees'
    }
    static getEmployee(employee_id: string) {
        return '${API_URL}/employees/' + employee_id;
    }
    // Employee paths - POST
    static createEmployee() {
        return '${API_URL}/employees';
    }    
    // Employee paths - PUT
    static updateEmployee() {
        return '${API_URL}/employees/{employee_id}';
    }    
    // Employee paths - DELETE
    static deleteEmployee(employee_id: string) {
        return '${API_URL}/employees/' + employee_id;
    }   
}