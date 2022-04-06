import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  signUp(): void { }

  ngOnInit(): void { }
}