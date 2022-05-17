import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account/model/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  @Input()
  accounts: Account[] = [];

  constructor() { }

  ngOnInit(): void { }

}
