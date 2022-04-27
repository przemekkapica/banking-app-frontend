
import { Component, OnInit } from '@angular/core';

import { Transport } from '../../../domain/transport/model/transport';

@Component({
  selector: 'app-escort',
  templateUrl: './escort.component.html',
  styleUrls: ['./escort.component.scss']
})
export class EscortComponent implements OnInit {

  transports!: Transport[];
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
      label: 'Escort 1',
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
