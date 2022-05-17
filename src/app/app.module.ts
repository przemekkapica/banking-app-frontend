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
import { ClientComponent } from './presentation/pages/client/client_page/client.component';
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
import { OrderListModule } from 'primeng/orderlist';
import { DropdownModule } from 'primeng/dropdown';
import { ClientModule } from './data/client/client.module';
import { environment } from 'src/environments/environment';
import { ClientRepository } from './domain/client/client-repository';
import { ClientDataSource } from './data/client/data_sources/client_data_source';


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
    DropdownModule,
    ClientModule,
  ],
  providers: [
    {
      provide: 'ClientDataSource',
      useClass: environment.clientDataSource
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
