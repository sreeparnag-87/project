import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = true;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  collection: any = [];
  uservalue = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required])
    },
    {
      
      // validator :this.confirmpasswordMatch('password', 'cpassword')
      //  validators: this.confirmpasswordMatch, asyncValidators: otherValidator
     
    });


   confirmpasswordMatch(password: any, cpassword: any) {
    return (formGroup: FormGroup) =>
    {
    console.log(`password is ${password} cpassword is ${cpassword}`)
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[cpassword];
    if (matchingControl.errors && !matchingControl.errors['confirmpasswordMatch']) {
      return;
    }

   // error will be shown on cpassword if validation fails

    if (control.value !== matchingControl.value) {
      alert("Your password and confirmation password do not match.");
      matchingControl.setErrors({ confirmpasswordMatch: true });
    }

    else {
      matchingControl.setErrors(null);
    }

    }
  }


  formsubmit() {
    this.submitted = true;
    console.log(this.uservalue.value)
    swal("SignUp Successfull!", "You clicked the button!", "success");
    this.http.post('http://localhost:8082/registeruser', this.uservalue.value)
      .subscribe(res => {
        //    alert("SignUp Successfull");
        swal("SignUp Successfull!", "You clicked the button!", "success");
        console.log("SignUp Successfull");
        this.uservalue.reset();
      })

  }
  // subbmitsignup() {
  //  // alert("submitted")
  // }

  get f() {
    return this.uservalue.controls;
  }

  get name() {
    return this.uservalue.get('name')
  }
  get username() {
    return this.uservalue.get('username')
  }
  get password() {
    return this.uservalue.get('password')
  }
  get cpassword() {
    return this.uservalue.get('cpassword')
  }


  // visible:boolean=true;
  changetype: boolean = true;
  viewpass() {
    //   this.visible=!this.visible;
    this.changetype = !this.changetype;
  }


}



