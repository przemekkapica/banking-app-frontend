import { Component, OnInit } from '@angular/core';

interface RoleItem {
  roleName: string;
  role: Role;
}

enum Role {
  Client,
  Employee,
  Escort,
  Ceo
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  styles: [`
    :host {
      ::ng-deep .p-calendar {
        width: 100%;
      }
    }
  `]
})
export class SignUpComponent implements OnInit {
  username: string = '';
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  dateOfBirth: Date | null = null;
  password: string = '';
  repeatedPassword: string = '';
  minCalendarDate: Date = new Date(1900, 1, 1, 0, 0, 0);
  maxCalendarDate: Date = new Date();
  roles!: RoleItem[];
  selectedRole: RoleItem | null = null;

  constructor() { }

  signUp(): void { }

  ngOnInit(): void { 
    this.roles = [
      { roleName: 'Client', role: Role.Client },
      { roleName: 'Employee', role: Role.Employee },
      { roleName: 'Escort', role: Role.Escort },
      { roleName: 'CEO', role: Role.Ceo },
  ];
  }
}
