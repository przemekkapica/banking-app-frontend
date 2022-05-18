
import { Component, Inject, OnInit } from '@angular/core';
import { GetAllClientsUseCase } from 'src/app/domain/client/use-case/get-all-clients-use-case';
import { Client } from 'src/app/domain/client/model/client';
import { Account } from 'src/app/domain/account/model/account';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: []
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  client?: Client;
  selectedAccount!: Account;
  navbarItems = [
    {
      label: 'Accounts',
      icon: 'pi pi-credit-card',
      routerLink: ['accounts'],
    },
    {
      label: 'Loans',
      icon: 'pi pi-money-bill',
      routerLink: ['loans'],
    },
    {
      label: 'Deposits',
      icon: 'pi pi-fw pi-shield',
      routerLink: ['deposits'],
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

  constructor(
    private readonly getAllClientsUseCase: GetAllClientsUseCase
  ) { }
  
  async ngOnInit(): Promise<void> {
    await this.getAllClients();
    this.client = this.clients[0];
    this.selectedAccount = this.clients[0].accounts[0];
  }
  
  private async getAllClients() {
    await this.getAllClientsUseCase.call().then((data: Client[]) => this.clients = data);
  }

  selectAccount(account: Account): void {
    this.selectedAccount = account;
  }

}
