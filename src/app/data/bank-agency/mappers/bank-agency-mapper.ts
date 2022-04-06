
import { BankAgency } from 'src/app/domain/bank-agency/model/bank-agency';
import { Client } from 'src/app/domain/client/model/client';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { BankAgencyDTO } from '../dtos/bank-agency-dto';

export class BankAgencyMapper implements BidirectionalMapper<BankAgencyDTO, BankAgency> {
  mapTo(param: BankAgency): BankAgencyDTO {
    return {
        moneyInPaper: param.moneyInPaper,
        agencyId: param.agencyId,
        address: param.address,
    };
  }

  mapFrom(param: BankAgencyDTO): BankAgency {
    return {
        moneyInPaper: param.moneyInPaper,
        agencyId: param.agencyId,
        address: param.address,
    };
  }
}