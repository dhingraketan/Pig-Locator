import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PigReport, Status } from 'src/app/PigReport';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports!: PigReport[];
  statusChange: Subject<void> = new Subject<void>();
  
  constructor() {

    this.reports = [
      {
        reporterFirstName: "John",
        reporterLastName: "Doe",
        reporterPhone: "123456789",
        pid: 12,
        breed: "Pig",
        location: 
        {
          name: "Tel Aviv",
          lat: 32.0853,
          lng: 34.7818
        },
        dateNtime: new Date(),
        status: Status.ready,
        notes: "This is a note"

      }
    ];   
   
  }

  ngOnInit(): void {
  }

  changeStatus(report: PigReport){
    this.statusChange.next();
    const index = this.reports.indexOf(report);
    // this.reports[index].toogleStatus();
  }

  deleteReport(report: PigReport){
    const index = this.reports.indexOf(report);
    this.reports.splice(index, 1);
  }

  viewReport(report: PigReport){

  }

}


