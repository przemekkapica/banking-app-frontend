import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain/employee/model/employee';
import { GetAllEmployeesUseCase } from 'src/app/domain/employee/use-case/get-all-employees-use-case';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee?: Employee;
  navbarItems = [
    {
      label: 'Management',
      icon: 'pi pi-sitemap',
      items: []
    },
    {
      label: 'Actions',
      icon: 'pi pi-fw pi-pencil',
      items: []
    },
    {
      label: 'Employee 1',
      icon: 'pi pi-fw pi-user',
      style: { 'margin-left': 'auto' },
      items: [
        {
          label: 'Settings',
          icon: 'pi pi-fw pi-cog',

        },
        {
          label: 'Sign out',
          icon: 'pi pi-fw pi-sign-out',
          routerLink: [''],
        },
      ],
    },
  ];

  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!';
  
  constructor(
    private readonly getAllEmployeesUseCase: GetAllEmployeesUseCase
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getAllEmployees();
    this.employee = this.employees[0];
  }

  private async getAllEmployees() {
    await this.getAllEmployeesUseCase.call().then((data: Employee[]) => this.employees = data);
  }

}
