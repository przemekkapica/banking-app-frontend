import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../pages/auth/auth.component';
import { RegisterComponent } from '../pages/register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
