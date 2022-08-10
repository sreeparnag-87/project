import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiveService } from '../service/employee-servive.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private empservice: EmployeeServiveService,
              private router: ActivatedRoute) { }
  submitted = true;
  editemp = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    emailid: new FormControl(''),
    phno: new FormControl('')
  });
  empdata: any = [];
  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.empservice.getEmpId(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log(result)
      this.empdata = result
   //   this.editemp=result;
      this.editemp = new FormGroup({
         id: new FormControl(this.empdata.id),
        firstname: new FormControl(this.empdata.firstname),
        lastname: new FormControl(this.empdata.lastname),
        emailid: new FormControl(this.empdata.emailid),
        phno: new FormControl(this.empdata.phno)
      })
    //  this.empdata = result
    })


    //  this.empservice.getEmpId(this.router.snapshot.params['id']).subscribe((result:any)=>{
    //   console.log("result", result)
    //   this.editemp=result;
    //   result = new FormGroup({
    //     id: new FormControl(this.empdata.id),
    //    firstname: new FormControl(this.empdata.firstname),
    //    lastname: new FormControl(this.empdata.lastname),
    //    emailid: new FormControl(this.empdata.emailid),
    //    phno: new FormControl(this.empdata.phno)
    //  })
    //  })
  }
  editempdetails() {
    this.submitted = true;
    console.log(this.editemp.value)
    this.empservice.editdata(this.router.snapshot.params['id'], this.editemp.value).subscribe((updatedata: any) => {
      console.log("updatedata", updatedata)
    })
    // this.empservice.editdata(this.router.snapshot.params['id'],this.editemp.value).subscribe
    //   ((updatedata) => {
    //     console.log("updatedata", updatedata)
    //   })

    swal("Good job!", "Updated Successfully!", "success");
  }
}

function id(id: any, any: any) {
  throw new Error('Function not implemented.');
}
