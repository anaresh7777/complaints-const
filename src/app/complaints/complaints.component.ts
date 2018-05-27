import { Component, OnInit } from '@angular/core';
import { CmpltService } from '../cmplt.service';
import { Complaint } from '../complaint';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
  providers: [CmpltService]
})
export class ComplaintsComponent implements OnInit {
  //complaints: Complaint[] ;
  complaints: Complaint[] = [];
  complaint: Complaint;
  village: string;
  mandal: string;
  district: string;
  postalcode: string;
  date: Date;
  file: string;
  description: string;


  constructor(private cmpltService: CmpltService, route:ActivatedRoute, public router:Router) {}
  

  ngOnInit() {}
  
    addComplaints(f: NgForm) {

    const newComplaint = {
      village: this.village,
      mandal: this.mandal,
      district: this.district,
      postalcode: this.postalcode,
      date: this.date,
      file: this.file,
      description: this.description
    }
    this.cmpltService.addComplaints(newComplaint)
    .subscribe(() => this.goBack()
    /* { Complaint => 
      this.complaints.push(Complaint);
  } */
);

}
goBack(){
  this.router.navigate(['/home'])
}

}
