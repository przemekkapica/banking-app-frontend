export class NetworkConfiguration {
    static API_URL = 'localhost:8080';

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

    //Escort
    static getEscorts() {
        return '${API_URL}/escorts'
    }
    static updateEscort() {
        return '${API_URL}/escort/{escortId}';
    }
    static getEscort(escortId: number) {
        return '${API_URL}/escorts/' + escortId;
    }
    static deleteEscort(escortId: number) {
        return '${API_URL}/escorts/' + escortId;
    }

     // TODO: do the rest :)
}