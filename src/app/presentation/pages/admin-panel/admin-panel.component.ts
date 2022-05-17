import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account/model/account';
import { Client } from 'src/app/domain/client/model/client';
import { Employee } from 'src/app/domain/employee/model/employee';
import { Transport } from 'src/app/domain/transport/model/transport';
import { Server } from 'src/app/domain/server/model/server';
import { Loan } from 'src/app/domain/loan/model/loan';
import { Deposit } from 'src/app/domain/deposit/model/deposit';
import { CEO } from 'src/app/domain/ceo/model/ceo';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

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
      label: 'Administrative Panel',
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

  transports!: Transport[];
  employees!: Employee[];
  //TODO:  escorts!: Escort[];
  clients!: Client[];
  accounts!: Account[];
  ceos!: CEO[];
  deposits!: Deposit[];
  loans!: Loan[];
  server!: Server;
  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!';

  constructor() { }

  ngOnInit(): void {
  }
  initializeSampleData(): void {
    //TEMPORARY 
    this.transports = [{
      moneyInPaper: 100000,
      escortId: 1,
      transportStatus: 'In progress',
      transportPrice: 5000,
      originAgency: 2,
      destinationAgency: 12
    },
    {
      moneyInPaper: 120000,
      escortId: 1,
      transportStatus: 'To do',
      transportPrice: 6000,
      originAgency: 4,
      destinationAgency: 10
    },
    {
      moneyInPaper: 140000,
      escortId: 1,
      transportStatus: 'To do',
      transportPrice: 7000,
      originAgency: 9,
      destinationAgency: 2,
    }]
  }
}
