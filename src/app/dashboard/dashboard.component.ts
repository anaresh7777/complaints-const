import { Component, OnInit } from '@angular/core';
import { CmpltService } from '../cmplt.service';
import { Complaint } from '../complaint';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CmpltService]
})
export class DashboardComponent implements OnInit {
  complaints: Complaint[];
  complaint: Complaint;
  village: string;
  mandal: string;
  district: string;
  postalcode: string;
  date: Date;
  description: string;

  constructor(private cmpltService: CmpltService) { }

  ngOnInit() {

    this.cmpltService.getComplaints()
    .subscribe(Complaints => this.complaints = Complaints);
  }

}
