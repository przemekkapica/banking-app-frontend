import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account/model/account';
import { Client } from 'src/app/domain/client/model/client';
import { Employee } from 'src/app/domain/employee/model/employee';
import { Transport } from 'src/app/domain/transport/model/transport';
import { Server } from 'src/app/domain/server/model/server';
import { Loan } from 'src/app/domain/loan/model/loan';
import { BankAgency } from 'src/app/domain/bank-agency/model/bank-agency';
import { Deposit } from 'src/app/domain/deposit/model/deposit';
import { CEO } from 'src/app/domain/ceo/model/ceo';
import { PersonData} from 'src/app/domain/person/model/person';
import { GetAllClientsUseCase } from 'src/app/domain/client/use-case/get-all-clients-use-case';
import { GetAllAccountsUseCase } from 'src/app/domain/account/use-case/get-all-accounts-use-case';
import { GetAllEmployeesUseCase } from 'src/app/domain/employee/use-case/get-all-employees-use-case';
import { GetAllServersUseCase } from 'src/app/domain/server/use-case/get-all-servers-use-case';
import { GetAllBankAgenciesUseCase } from 'src/app/domain/bank-agency/use-case/get-all-bank-agencies-use-case';
import { GetAllCEOUseCase } from 'src/app/domain/ceo/use-case/get-all-ceos-use-case';


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
  bank_agencies!: BankAgency[];
  //TODO:  escorts!: Escort[];
  clients!: Client[];
  accounts!: Account[];
  ceos!: CEO[];
  deposits!: Deposit[];
  loans!: Loan[];
  server!: Server;
  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!';

  constructor(
    private readonly getAllClientsUseCase: GetAllClientsUseCase, 
    private readonly getAllAccountsUseCase: GetAllAccountsUseCase, 
    private readonly getAllEmployeesUseCase: GetAllEmployeesUseCase, 
    private readonly getAllServersUseCase: GetAllServersUseCase, 
    private readonly getAllBankAgenciesUseCase: GetAllBankAgenciesUseCase, 
    private readonly getAllCEOsUseCase: GetAllCEOUseCase
    //TODO: implement more use cases 
  ) {
   }

  async ngOnInit(): Promise<void> {
    await this.getAllClients();
    await this.getAllAccounts();
    await this.getAllEmployees();
    await this.getAllServers();
    await this.getAllBankAgencies();
    await this.getAllCEO();
  }

  private async getAllClients() {
    await this.getAllClientsUseCase.call().then((data: Client[]) => this.clients = data);
  }
  
  private async getAllAccounts() {
    await this.getAllAccountsUseCase.call().then((data: Account[]) => this.accounts = data);
  }
  
  private async getAllEmployees() {
    await this.getAllEmployeesUseCase.call().then((data: Employee[]) => this.employees = data);
  }
  
  private async getAllServers() {
    await this.getAllServersUseCase.call().then((data: Server[]) => this.server = data[0]);
  }

  private async getAllBankAgencies() {
    await this.getAllBankAgenciesUseCase.call().then((data: BankAgency[]) => this.bank_agencies = data);
  }
  private async getAllCEO() {
    await this.getAllCEOsUseCase.call().then((data: CEO[]) => this.ceos = data);
  }
}
