import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private name : string;
  private last_name : string;
  private email : string;
  private date_of_birth : Date;
  private password : string;
  private repeated_password : string;
  public wrong_password : boolean = false;
  public wrong_repeated_password : boolean = false;
  public wrong_email : boolean = false;
  constructor() {

    this.name="";
    this.last_name="";
    this.email="";
    this.date_of_birth=new Date();
    this.password = "";
    this.repeated_password="";

   }

  RegisterUser(): void {
    if(!this.wrong_email && !this.wrong_password && !this.wrong_repeated_password)
    {
      //proceed 
    }

  }
 onNameChange(event: any): void {
  this.name = event.target.value;
  }
  onLastNameChange(event: any): void {
    this.last_name = event.target.value;
    }
  onEmailChange(event: any): void {
      this.email= event.target.value;
      var valid_pattern = new RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]")
      this.wrong_email = !this.email.match(valid_pattern);
      }
  onDateChange(event: any): void {
        this.date_of_birth= event.target.value;
        }

onPasswordChange(event: any): void {
          this.password= event.target.value;
          var valid_pattern = new RegExp("^[a-zA-Z0-9]{8,}$")
          this.wrong_password = !this.password.match(valid_pattern);
          }

onRepeatedPasswordChange(event: any): void {
  if(this.password!=this.repeated_password)
  {
      this.wrong_repeated_password=true;
  }
  else this.wrong_repeated_password=false;
  
  }
  ngOnInit(): void {
   
    
  }

}
