import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  fName!:string;
  lName!:string;
  phone!:string;
  pid!:number;
  breed!:string;
  locName!:string;
  lng!:number;
  lat!:number;
  notes!:string;

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {}
}


