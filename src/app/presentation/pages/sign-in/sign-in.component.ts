import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  invalid: boolean = false;

  constructor(
    private router: Router,
  ) { }

  signIn(): void {
    // ONLY TEMPORARY
    if (this.username == 'empl' && this.password == 'empl') {
      this.router.navigate(['employee']);
    }
    else if (this.username == 'cli' && this.password == 'cli') {
      this.router.navigate(['client']);
    }
  }

  ngOnInit(): void { }
}
