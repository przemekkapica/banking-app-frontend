import { Component, Inject, OnInit } from '@angular/core';
import { Person } from '../person/person.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class Employee extends Person {

  public salary: number;
  public post: string;

  constructor(@Inject(Number) salary: number, @Inject(String) post: string) {
    super();
    this.salary=salary;
    this.post=post;
  }

  

}
