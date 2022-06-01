import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRepository } from 'src/app/domain/employee/employee-repository';
import { EmployeeRepositoryImpl } from './employee-repository-impl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: EmployeeRepository, useClass: EmployeeRepositoryImpl}
  ]
})
export class EmployeeModule { }
