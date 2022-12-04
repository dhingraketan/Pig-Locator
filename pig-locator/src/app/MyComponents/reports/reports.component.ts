import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PigReport } from 'src/app/PigReport';

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
      new PigReport("John", "Doe", "1234567890", 1234567890, "Breed", { name: "Burn", lat: 0, lng: 0 }, "Notes"),
      new PigReport("Jane", "Doe", "0987654321", 1234567890, "Breed", { name: "Burn", lat: 0, lng: 0 }, "Notes")
    ];

  }

  ngOnInit(): void {
  }

  viewReportInfo(report: PigReport) {
    const index = this.reports.indexOf(report);

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

  formDate(date: Date): string {
    return formatDate(date, 'MMMM d, y, hh:mm:ss a', 'en-US');
  }
}






