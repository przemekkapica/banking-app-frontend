
import { Component, OnInit } from '@angular/core';
import { Deposit } from '../../../domain/deposit/model/deposit';
import { Loan } from '../../../domain/loan/model/loan';
import { Account } from '../../../domain/account/model/account';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  deposits!: Deposit[];
  loans!: Loan[];
  navbarItems = [
    {
      label: 'Management',
      icon: 'pi pi-sitemap',
      items: []
    },
    {
      label: 'Actions',
      icon: 'pi pi-fw pi-pencil',
      items: []
    },
    {
      label: 'Client 1',
      icon: 'pi pi-fw pi-user',
      style: { 'margin-left': 'auto' },
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-cog',

        },
        {
          label: 'Sign out',
          icon: 'pi pi-fw pi-sign-out',
          routerLink: [''],
        },
      ],
    },
  ];

  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!';

  constructor() {
  }

  ngOnInit(): void {
    this.initializeSampleData();
  }

  initializeSampleData(): void {
    //TEMPORARY 
    this.deposits = [{
      accountId: '1',
      moneyAmount: 200,
      interestRate: 10,
      startDate: new Date(1999, 10, 15, 0, 0, 0),
      endDate: new Date(2023, 10, 15, 0, 0, 0)
    },
    {
      accountId: '2',
      moneyAmount: 3000,
      interestRate: 500,
      startDate: new Date(2000, 1, 4, 0, 0, 0),
      endDate: new Date(2030, 1, 4, 0, 0, 0)
    }]
    this.loans = [{
      accountId: '2',
      amountToPay: 5000,
      interestRate: 300,
      startDate: new Date(2001, 1, 4, 0, 0, 0),
      endDate: new Date(2023, 1, 4, 0, 0, 0)
    }]
  }
}
