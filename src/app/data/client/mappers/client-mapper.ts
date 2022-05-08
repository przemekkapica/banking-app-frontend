
import { Client } from 'src/app/domain/client/model/client';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { ClientDTO } from '../dtos/client-dto';

export class ClientMapper implements BidirectionalMapper<ClientDTO, Client> {
  mapTo(param: Client): ClientDTO {
    return {
        id: param.id,
        accounts: param.accounts,
        createdDate: new Date(),
        loans: param.loans!, // TODO: remove
        deposits: param.deposits!
    };
  }

  mapFrom(param: ClientDTO): Client {
    return {
      id: param.id,
      accounts: param.accounts,
   };
  }
}