import { NgModule } from '@angular/core';

import { AppRoutingModule } from './presentation/routing/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './presentation/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './presentation/pages/auth/auth.component';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

// primeng modules here
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from './presentation/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    InputTextareaModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
