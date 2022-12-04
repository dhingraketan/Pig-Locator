import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './MyComponents/create-report/create-report.component';
import { ReportInfoComponent } from './MyComponents/report-info/report-info.component';
import { ReportsComponent } from './MyComponents/reports/reports.component';

const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'report-info', component: ReportInfoComponent },
  { path: 'create-report', component: CreateReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
