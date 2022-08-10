import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service'
import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router, private auths: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.auths.isLoggedIn()) {

      this.router.navigate(['EmployeeList']);
      swal("Successfully Login!");
    }

  }
  uservalue = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  formsubmit(uservalue: any) {
    console.log(`form data : ${uservalue.value}`)
    return this.http.post<any>('http://localhost:8082/login', this.uservalue.value)
      .subscribe(
        (result: any) => {
          console.log(`login successfully ${result}`)
          swal("Login Successfull!", "success");
          this.uservalue.reset();
          this.router.navigate(['Home'])
        },
        (_error: any) => {
          swal("Admin not Found /  Enter right emailid and password");
          console.log("Admin not Found")
          this.uservalue.reset();
        }
      );


    // using json

    // this.http.get<any>("http://localhost:3000/SignupDetails")
    //   .subscribe(res => {
    //     console.log(`json data : ${res}`)
    //     const user = res.find((a: any) => {

    //       return a.username === this.uservalue.value.username &&
    //         a.password === this.uservalue.value.password
    //     });


    // if (user) {
    //   console.log("Successfully Login!");
    //   this.uservalue.reset();
    //   // this.router.navigate(['EmployeeList'])
    //   this.router.navigate(['Home'])
    // } else {
    //   //  alert("user not found")
    //   swal("Admin not found!");
    // }
  }
  get username() {
    return this.uservalue.get('username')
  }
  get password() {
    return this.uservalue.get('password');
  }

  // visible:boolean=true;
  changetype: boolean = true;
  viewpass() {
    //  this.visible=!this.visible;
    this.changetype = !this.changetype;
  }

}
// buttonclick(){
//  this.router.navigate(['/EmployeeList']);
// }

// get username() {
//   return this.uservalue.get('username')
// }
// get password() {
//   return this.uservalue.get('password');
// }

//for Showing password 


