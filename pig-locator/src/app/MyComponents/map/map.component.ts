import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

// need to add to make leaflet icons work
import { icon, Marker } from 'leaflet';
import { PopulateMapService } from 'src/app/Services/populate-map.service';
import { LocInfo } from 'src/app/LocInfo';
import { PigReport } from 'src/app/PigReport';
import { HttpClient } from '@angular/common/http';
import { Location } from 'src/app/Location';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  locArray!: LocInfo[];
  rprts!: PigReport[];

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.map = L.map('mapid').setView([49.2, -123], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGhpbmdyYWtldGFuc2Z1IiwiYSI6ImNsYjV4bWFjMjA2ZDUzcW82a3QzOTB4NjMifQ.TR8tcySmnYerWOa680kc4w', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    this.getPigReports();

    
  }

  getPigReports() {
    this.rprts = [];
    this.http.get('https://272.selfip.net/apps/ePH24mDixT/collections/reports/documents/', { responseType: 'json' }).subscribe((data: any) => {
      for (let report of data) {
        this.rprts.push(new PigReport(report.data.firstName, report.data.lastName, report.data.phoneNumber, report.data.pid, report.data.breed, new Location(report.data.locationName, report.data.lng, report.data.lat), report.data.extraNotes, report.data.status, report.data.dateNtime));
      }

      this.populateLocInfo();
      
    });

  }

  populateLocInfo() {
    this.locArray = [];
    for (let report of this.rprts) {
      if (this.locArray.find(locInfo => locInfo.location.name === report.location.name)) {
        this.locArray.find(locInfo => locInfo.location.name === report.location.name)!.numCases++;
      } else {
        this.locArray.push(new LocInfo(report.location, 1));
      }
    }

    for (let loc of this.locArray) {
      L.marker([loc.location.lat, loc.location.lng]).addTo(this.map)
        .bindPopup("<b>" + loc.location.name + "</b><br />" + loc.numCases + " case(s) reported.")
        .openPopup();
    }
  }
}
