import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length===0){
      return value
    }
    return value.filter(function(search:any){
      return (search.firstname.toUpperCase().indexOf(searchTerm) > -1 )||
      (search.firstname.toLowerCase().indexOf(searchTerm) > -1 )||
      (search.lastname.toUpperCase().indexOf(searchTerm) > -1 )||
      (search.lastname.toLowerCase().indexOf(searchTerm) > -1 )||
      (search.emailid.toUpperCase().indexOf(searchTerm) > -1 )||
      (search.emailid.toLowerCase().indexOf(searchTerm) > -1 )||
      (search.phno.toUpperCase().indexOf(searchTerm) > -1 )||
      (search.phno.toLowerCase().indexOf(searchTerm) > -1 )
    });
  }

}
