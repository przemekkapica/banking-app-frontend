
import { Escort } from 'src/app/domain/escort/model/escort';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { EscortDTO } from '../dtos/escort-dto';

export class EscortMapper implements BidirectionalMapper<EscortDTO, Escort> {
  mapTo(param: Escort): EscortDTO {
    return {
      moneyBalance:param.moneyBalance,
      workStatus:param.workStatus,
      escortId:param.escortId
    };
  }

  mapFrom(param: EscortDTO): Escort {
    return {
      moneyBalance:param.moneyBalance,
      workStatus:param.workStatus,
      escortId:param.escortId
   };
  }
}