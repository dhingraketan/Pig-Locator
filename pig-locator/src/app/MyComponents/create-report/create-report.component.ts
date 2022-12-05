import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/Location';
import { PigReport } from 'src/app/PigReport';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  fName!: string;
  lName!: string;
  phone!: string;
  pid!: number;
  breed!: string;
  locName!: string;
  lng!: number;
  lat!: number;
  notes!: string;

  report!: PigReport;
  loc!: Location;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  onSubmit() {
    
    this.loc = new Location(this.locName, this.lng, this.lat);
    this.report = new PigReport(this.fName, this.lName, this.phone, this.pid, this.breed, this.loc, this.notes);
    console.log(JSON.stringify(this.report.dateNtime));
    var key = JSON.stringify(this.report.dateNtime);
    this.postReport();
  }

  postReport() {
    const data = {
      firstName: this.report.reporterFirstName,
      lastName: this.report.reporterLastName,
      phoneNumber: this.report.reporterPhone,
      breed: this.report.breed,
      pid: this.report.pid,
      locationName: this.report.location.name,
      lng: this.report.location.lng,
      lat: this.report.location.lat,
      extraNotes: this.report.notes,
      dateNtime: this.report.dateNtime,
      status: this.report.status
    }

    const key = uuid.v4();
    const body = {
      key: key,
      data: data,
    };

    this.http.post('https://272.selfip.net/apps/ePH24mDixT/collections/report/documents/', body)
    .subscribe((response) => {
      console.log(response);
    });
  }
}


