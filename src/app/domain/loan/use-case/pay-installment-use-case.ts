import { Injectable } from "@angular/core";
import { UseCase } from "src/app/domain/common/use-case";
import { ClientRepository } from "../../client/client-repository";

@Injectable({ providedIn: 'root' })
export class PayInstallmentUseCase implements UseCase<string, void> {

    constructor(private clientRepository: ClientRepository) { }

    public async call(request: string): Promise<void> {
        return this.clientRepository.payInstallment(request);
    }
}