import { Injectable } from '@angular/core';
import { Http, Headers }  from '@angular/http';
import { Complaint } from './complaint';
import 'rxjs/add/operator/map';

@Injectable()
export class CmpltService {

  constructor(private http: Http) { }
  // get complaints
    getComplaints()
     {
      return this.http.get('http://localhost:3000/api/complaints')
      .map(res => res.json());
  }

   // add complaints
   addComplaints(info)
   {
     var headers = new Headers;
     headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/complaints', info)
    .map(res => res.json());
}

// delete complaints
deleteComplaints(id){
  return this.http.delete("http://localhost:3000/api/complaints"+id)
      .map(res => res.json());
}

} 
