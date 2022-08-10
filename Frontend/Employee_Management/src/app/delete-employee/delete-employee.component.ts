import { Component, OnInit } from '@angular/core';
import { EmployeeServiveService } from '../service/employee-servive.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private empservice:EmployeeServiveService) { }

  ngOnInit(): void {
  }
  // collection:any=[];
  // deleteEmp(item:any){
  //   this.collection.splice(item-1,1)
  //   this.empservice.deletedata(item).subscribe((result)=>{
  //     console.log("result",result)
  //   })
  // }
}
