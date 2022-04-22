import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles: [`
    :host ::ng-deep p-menubarsub {
      width: 100%;
    }  
    :host ::ng-deep .p-card .p-card-body {
      padding: 0;
    }
    :host ::ng-deep .p-card .p-card-content {
      padding: 0;
    }
    :host ::ng-deep .p-menubar {
      padding: 0.7rem;
      /* border: 0px; */
      border-radius: 0px;
      background: #FFFFFF;
    }
  `]
})
export class NavbarComponent implements OnInit {

  @Input()
  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
