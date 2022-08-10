import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiveService {


  constructor(private http: HttpClient) { }
 // url1 = "http://localhost:8082/AddEmployee";
 //url2=http://localhost:8082/GetEmployee

  url="http://localhost:8082/GetEmployeeById";
  data: any
  adddata(data: any) {
    console.log(data)
    return this.http.post("http://localhost:8082/AddEmployee", data)
  }
  getdata() {
    console.log(this.data);
    return this.http.get("http://localhost:8082/GetEmployee");
  }
  editdata(id: number, data: any): Observable<Object> {
    return this.http.put('http://localhost:8082/EditEmployee/:id'+id,data)
  }
  deletedata(id: number): Observable<Object> {
    return this.http.delete('http://localhost:8082/DeleteEmployee/' + id);
  }
  getEmpId(id: number): Observable<Object> {
    return this.http.get( `${this.url}/${id}`)
  }
}
