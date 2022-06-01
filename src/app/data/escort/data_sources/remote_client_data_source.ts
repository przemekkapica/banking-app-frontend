import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { NetworkConfiguration } from "src/app/core/config/network_configuration";
import { EscortDTO } from "../dtos/escort-dto";
import { EscortDataSource } from "./escort_data_source";

export class RemoteEscortDataSource implements EscortDataSource {

    constructor(private http: HttpClient) {}    


    getEscort(escortId: number): Promise<EscortDTO> {
        return lastValueFrom(this.http.get<EscortDTO>(NetworkConfiguration.getEscort(escortId)));
    }

    getEscorts(): Promise<EscortDTO[]> {
        return lastValueFrom(this.http.get<EscortDTO[]>(NetworkConfiguration.getEscorts()));
    }
    

    updateEscort(escort: EscortDTO): Promise<EscortDTO> {
        return lastValueFrom(this.http.put<EscortDTO>(NetworkConfiguration.updateEscort(), escort));
    }

    deleteEscort(escortId: number): Promise<void> {
        return lastValueFrom(this.http.delete<void>(NetworkConfiguration.deleteEscort(escortId)));
    }

}