import { Deposit } from 'src/app/domain/deposit/model/deposit';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { DepositDTO } from '../dtos/deposit-dto';

export class DepositMapper implements BidirectionalMapper<DepositDTO, Deposit> {
  mapTo(param: Deposit): DepositDTO {
    return {
        accountId: param.accountId,
        moneyAmount: param.moneyAmount,
        interestRate: param.interestRate,
        startDate: param.startDate,
        endDate: param.endDate,
    };
  }

  mapFrom(param: DepositDTO): Deposit {
    return {
        accountId: param.accountId,
        moneyAmount: param.moneyAmount,
        interestRate: param.interestRate,
        startDate: param.startDate,
        endDate: param.endDate,
    };
  }
}