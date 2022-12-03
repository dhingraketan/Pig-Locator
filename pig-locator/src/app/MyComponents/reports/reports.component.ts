import { Component, OnInit } from '@angular/core';
import { PigReport } from 'src/app/PigReport';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports!: PigReport[];
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(report: PigReport){

  }

  deleteReport(report: PigReport){

  }

  viewReport(report: PigReport){

  }

}


