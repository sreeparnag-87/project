import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './service/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OrderModule } from 'ngx-order-pipe';
import { EmployeeServiveService } from './service/employee-servive.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    RegisterComponent,
    LogoutComponent,
    FilterPipe,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    OrderModule,
  ],
  providers: [EmployeeServiveService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
