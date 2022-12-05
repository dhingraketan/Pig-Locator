import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { delay, Subject } from 'rxjs';
import { PigReport } from 'src/app/PigReport';
import { Location } from 'src/app/Location';
import { LocInfo } from 'src/app/LocInfo';
import { PopulateMapService } from 'src/app/Services/populate-map.service';
import { HttpClient } from '@angular/common/http';

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


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getPigReports();
  }

  getPigReports() {
    this.reports = [];
    this.http.get('https://272.selfip.net/apps/ePH24mDixT/collections/reports/documents/', { responseType: 'json' }).subscribe((data: any) => {
      for (let report of data) {
        this.reports.push(new PigReport(report.data.firstName, report.data.lastName, report.data.phoneNumber, report.data.pid, report.data.breed, new Location(report.data.locationName, report.data.lng, report.data.lat), report.data.extraNotes, report.data.status, report.data.dateNtime));
      }
      
    });

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






