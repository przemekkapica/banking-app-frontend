import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../pages/client/accounts/accounts.component';
import { ClientComponent } from '../pages/client/client_page/client.component';
import { DepositsComponent } from '../pages/client/deposits/deposits.component';
import { LoansComponent } from '../pages/client/loans/loans.component';
import { EmployeeComponent } from '../pages/employee/employee.component';
import { EscortComponent } from '../pages/escort/escort.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'client', component: ClientComponent, children: [
    { path: 'accounts', component: AccountsComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'deposits', component: DepositsComponent },
  ]},
  { path: 'employee', component: EmployeeComponent },
  { path: 'escort', component: EscortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
