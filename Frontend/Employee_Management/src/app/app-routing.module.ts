import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login' , component: LoginComponent  },
  {path:'signup' , component: RegisterComponent},
  {path:'EmployeeList', component:EmployeeListComponent},
  {path:'AddEmployee',component:AddEmployeeComponent },
  {path:'EditEmployee/:id',component:EditEmployeeComponent },
  {path:'Home',component:HomeComponent },
  {path:'DeleteEmployee/:id',component:DeleteEmployeeComponent },
  {path:'Logout' , canActivate:[AuthGuard], component:LogoutComponent },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
