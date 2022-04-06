import { Account } from 'src/app/domain/account/model/account';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { AccountDTO } from '../dtos/account-dto';

export class AccountMapper implements BidirectionalMapper<AccountDTO, Account> {
  mapTo(param: Account): AccountDTO {
    return {
        moneyAmount: param.moneyAmount,
    };
  }

  mapFrom(param: AccountDTO): Account {
    return {
        moneyAmount: param.moneyAmount,
    };
  }
}