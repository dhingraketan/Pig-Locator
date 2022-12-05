import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PigReport } from 'src/app/PigReport';
import { Location } from 'src/app/Location';
import { LocInfo } from 'src/app/LocInfo';
import { PopulateMapService } from 'src/app/Services/populate-map.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  inAction!: [idx: number, delAction: boolean];
  reports!: PigReport[];
  locInfos!: LocInfo[];
  statusChange: Subject<void> = new Subject<void>();
  statusDelete: Subject<void> = new Subject<void>();


  constructor(private populateMapService: PopulateMapService) {
    this.reports = [
      new PigReport("John", "Doe", "1234567890", 1234567890, "Breed", { name: "SFU Surrey", lat: 49.1867, lng: -122.8490 }, "Notes"),
      new PigReport("Jane", "Doe", "1234567890", 1234567890, "Breed", { name: "VANCOUVER", lat: 49.2567, lng: -123.1 }, "Notes")
    ];

  }

  ngOnInit(): void {
    //populate reports
    this.populateLocInfo();
    this.populateMapService.locArr = this.locInfos;
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

  populateLocInfo() {
    this.locInfos = [];
    for (let report of this.reports) {
      if(this.locInfos.find(locInfo => locInfo.location.name === report.location.name)){
        this.locInfos.find(locInfo => locInfo.location.name === report.location.name)!.numCases++;
      } else {
        this.locInfos.push(new LocInfo(report.location, 1));
      }
    }
  }
}






