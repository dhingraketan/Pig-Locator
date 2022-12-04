import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PigReport, Status } from 'src/app/PigReport';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  inAction!: [idx: number, delAction: boolean];
  reports!: PigReport[];
  statusChange: Subject<void> = new Subject<void>();
  statusDelete: Subject<void> = new Subject<void>();

  constructor() {
    this.reports = [
      new PigReport("John", "Doe", "1234567890", 1234567890, "Breed", { name: "Burn", lat: 0, lng: 0 }, "Notes")
    ];

  }

  ngOnInit(): void {
  }

  changeStatus(report: PigReport) {
    const index = this.reports.indexOf(report);
    this.inAction = [index, false];
    this.statusChange.next();
  }

  deleteReport(report: PigReport) {
    const index = this.reports.indexOf(report);
    this.inAction = [index, true];
    this.statusDelete.next();
  }

  viewReport(report: PigReport) {

  }

  continueAciton(passed: boolean) {
    if (passed) {
      if (this.inAction[1]) {
        this.reports.splice(this.inAction[0], 1);
      } else {
        this.reports[this.inAction[0]].toogleStatus();
      }
    } else {
      alert("Wrong password");
    }
  }
}






