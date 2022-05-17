import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../pages/admin-panel/admin-panel.component';
import { ClientComponent } from '../pages/client/client.component';
import { EmployeeComponent } from '../pages/employee/employee.component';
import { EscortComponent } from '../pages/escort/escort.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'escort', component: EscortComponent },
  { path: 'admin', component: AdminPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
