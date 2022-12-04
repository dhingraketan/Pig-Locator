import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportInfoComponent } from './MyComponents/report-info/report-info.component';
import { ReportsComponent } from './MyComponents/reports/reports.component';

const routes: Routes = [
  { path: '', component: ReportsComponent },
  { path: 'report-info', component: ReportInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
