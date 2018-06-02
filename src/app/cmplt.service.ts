import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule }  from '@angular/http';
import { Complaint } from './complaint';

import { map } from "rxjs/operators";



@Injectable()
export class CmpltService {

  constructor(private http: Http) { }
  // get complaints
    getComplaints()
     {
      return this.http.get('http://localhost:3000/api/complaints')
      .pipe(map(res  => res.json()));
  }

   // add complaints
   addComplaints(info)
   {
     var headers = new Headers;
     headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/complaints', info)
    .pipe(map(res => res.json()));
}
/*
//get single complaint
getComplaint(id){
  return this.http.get("http://localhost:3000/api/employees/"+id)
      .pipe(map(res => res.json()));
} */

// delete complaints
deleteComplaint(id){
  return this.http.delete("http://localhost:3000/api/complaints/"+id)
      .pipe(map(res => res.json()));
}

} 
