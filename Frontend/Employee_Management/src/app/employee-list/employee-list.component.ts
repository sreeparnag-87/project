import { Component, OnInit } from '@angular/core';
import { EmployeeServiveService } from '../service/employee-servive.service';
import swal from 'sweetalert';
import { getButtonListOpts } from 'sweetalert/typings/modules/options/buttons';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  totalLength: any
  page: any;

  namesearch: String = '';
  orderHeader: String = '';
  isdescorder: boolean = true
  constructor(private empservice: EmployeeServiveService) { }
  collection: any = [];
  ngOnInit(): void {
    this.empservice.getdata().subscribe((data) => {
      console.log("data", data)
      this.collection = data;
      console.log("collection: ", this.collection)
    })
  }
  item: any
  deleteEmp(id: number) {
    swal({
      dangerMode: true,
      title: 'Are you sure?',
      text: 'This record and it`s details will be permanantly deleted!',
      icon: 'warning',
      buttons: ["Cancel", "Yes!"],

    }).then((value) => {
      if (value) {
        this.collection.splice((id - 1), 1)
        this.empservice.deletedata(id).subscribe((result) => {
          console.log("result", result)
        })
        swal("Data has been deleted!", {
          icon: "success",
        });
      }
      else {
        swal("Not Deleted!");
      }
    });
  }
  //Sorting 
  sort(headerName: any) {
    this.isdescorder = !this.isdescorder
    this.orderHeader = headerName
  }
}