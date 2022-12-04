import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PigReport } from 'src/app/PigReport';

@Component({
  selector: 'app-report-info',
  templateUrl: './report-info.component.html',
  styleUrls: ['./report-info.component.css']
})
export class ReportInfoComponent implements OnInit {

  report: PigReport = history.state.report;
  date: string = formatDate(this.report.dateNtime, 'MMM d, y', 'en-US');
  time: string = formatDate(this.report.dateNtime, 'h:mm a', 'en-US');

  ngOnInit(): void {
  }

}
