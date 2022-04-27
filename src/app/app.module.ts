// angular modules here 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components here 
import { AppRoutingModule } from './presentation/routing/app-routing.module';
import { AppComponent } from './presentation/app.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { SignUpComponent } from './presentation/pages/sign-up/sign-up.component';
import { ClientComponent } from './presentation/pages/client/client.component';
import { EmployeeComponent } from './presentation/pages/employee/employee.component';
import { EscortComponent } from './presentation/pages/escort/escort.component';
import { NavbarComponent } from './presentation/common/navbar/navbar.component';

// primeng modules here
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    EmployeeComponent,
    NavbarComponent,
    ClientComponent,
    EscortComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    DividerModule,
    CalendarModule,
    MenubarModule,
    OrderListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
