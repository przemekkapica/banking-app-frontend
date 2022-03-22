import { NgModule } from '@angular/core';

import { AppRoutingModule } from './presentation/routing/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './presentation/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
