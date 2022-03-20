import { Component, Inject, Input, OnInit } from '@angular/core';

 @Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
}) 

export class Transport  {

  public moneyInPaper: number;
  public escortId: number;
  public transportStatus: string;
  public transportPrice: number;
  public originAgency: number;
  public destinationAgency: number;
  constructor(@Inject(Number) moneyinPaper_: number,@Inject(Number) escortId_: number, 
  @Inject(String) transportStatus_: string, @Inject(Number) transportPrice_: number,
  @Inject(Number) originAgency_: number, @Inject(Number) destinationAgency_: number) { 

      this.moneyInPaper = moneyinPaper_;
      this.escortId = escortId_;
      this.transportStatus = transportStatus_;
      this.transportPrice = transportPrice_;
      this.originAgency = originAgency_;
      this.destinationAgency = destinationAgency_;
    }



} 

