import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './MyComponents/map/map.component';
import { ReportsComponent } from './MyComponents/reports/reports.component';
import { PasswordPopupComponent } from './MyComponents/password-popup/password-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportInfoComponent } from './MyComponents/report-info/report-info.component';
import { HeaderComponent } from './MyComponents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReportsComponent,
    PasswordPopupComponent,
    ReportInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
