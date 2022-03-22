
import { Client } from 'src/app/domain/client/model/client';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { ClientDTO } from '../dtos/client-dto';

export class ClientMapper implements BidirectionalMapper<ClientDTO, Client> {
  mapTo(param: Client): ClientDTO {
    return {
        id: '',
        accounts: [],
        createdDate: new Date(),
    };
  }

  mapFrom(param: ClientDTO): Client {
    return {
        accounts: param.accounts
    };
  }
}