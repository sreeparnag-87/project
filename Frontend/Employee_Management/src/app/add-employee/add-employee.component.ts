import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiveService } from '../service/employee-servive.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empservice: EmployeeServiveService) { }
  addemp = new FormGroup({
    //id: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl('', [Validators.required, Validators.email]),
    phno: new FormControl('')
  });
  collection: any = [];
  submitted = true;
  ngOnInit(): void {
  }
  addempdetails(addemp: any) {

    if (addemp.value) {
      console.log(addemp.value)
      this.empservice.adddata(addemp.value).subscribe((Result: any) => {
        console.log("Result is : ", Result)
        this.collection = Result;
        console.log(`Collection array value is ${this.collection}`)
        swal("Good job!", "Added Successfully!", "success");
      })
     swal("Duplicate mail id not allowed");
      ;
    } 
  }
  get phno(){
  return this.addemp.get('phno')
}
}
