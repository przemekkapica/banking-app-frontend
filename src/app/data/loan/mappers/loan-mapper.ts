import { Loan } from 'src/app/domain/loan/model/loan';
import { BidirectionalMapper } from '../../common/bidirectional-mapper';
import { LoanDTO } from '../dtos/loan-dto';

export class LoanMapper implements BidirectionalMapper<LoanDTO, Loan> {
  mapTo(param: Loan): LoanDTO {
    return {
        accountId: param.accountId,
        amountToPay: param.amountToPay,
        interestRate: param.interestRate,
        startDate: param.startDate,
        endDate: param.endDate,
    };
  }

  mapFrom(param: LoanDTO): Loan {
    return {
        accountId: param.accountId,
        amountToPay: param.amountToPay,
        interestRate: param.interestRate,
        startDate: param.startDate,
        endDate: param.endDate,
    };
  }
}