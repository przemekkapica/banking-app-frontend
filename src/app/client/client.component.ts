import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person.component';
import {Account} from '../account/account.component';
import {Loan} from '../loan/loan.component';
import { Deposit } from '../deposit/deposit.component';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class Client extends Person{

  private accounts: Array<Account> =[];
  private loans: Array<Loan> = [];
  private deposits: Array<Deposit> =[];

  constructor() {
    super();
  }
/*private CreateAccount()
{
  this.accounts.push(new Account()); //this.accounts.push(new Account(0));
}

private TakeLoan()
{
  this.loans.push(new Loan()); //this.accounts.push(new Loan(0));
}

private CreateDeposit()
{
  this.deposits.push(new Deposit()); //this.accounts.push(new Deposit(0));
}

public PrintAccounts()
{
  return(this.accounts);
}
public PrintLoans()
{
  return(this.loans);
}
public PrintDeposits()
{
  return(this.deposits);

}
public CheckLoanToPay()
{
  let sum=0;
  for(var loan in this.loans) sum+=loan.amountToPay;

  return sum;
}

public withdrawFromDeposit()
{
  let sum=0;
  for(var loan in this.loans) sum+=loan.amountToPay;

  return sum;
}*/

  

  
}
