import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private email : string;
  private password : string;
 public invalid : boolean = false;
  constructor( private router: Router) {
    this.email="";
    this.password = "";
   }

  SignInClick() : void {
    

    //proceed with email and password to database
    // if does not exist 
        this.invalid = true;

    // else 
        //this.invalid = false;
  }

 
  onEmailChange(event: any): void {
    this.email= event.target.value;
 
    }

    onPasswordChange(event: any): void {
      this.password= event.target.value;
      }


  ngOnInit(): void {
  }

}
