import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

// need to add to make leaflet icons work
import { icon, Marker } from 'leaflet';
import { PopulateMapService } from 'src/app/Services/populate-map.service';
import { LocInfo } from 'src/app/LocInfo';

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
  public locArray!: LocInfo[];

  constructor(private populateMapService: PopulateMapService) { }

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

    this.locArray = this.populateMapService.locArr;
    
    for (let loc of this.locArray) {
      L.marker([loc.location.lat, loc.location.lng]).addTo(this.map)
        .bindPopup("<b>" + loc.location.name + "</b><br />" + loc.numCases + " case(s) reported.")
        .openPopup();
    }
    // L.marker([49.2276, -123.0076]).addTo(this.map)
    // .bindPopup("<b>Metrotown</b><br />cases reported.").openPopup();

    // L.marker([49.1867, -122.8490]).addTo(this.map)
    // .bindPopup("<b>SFU Surrey</b><br />cases reported.").openPopup();

    // this.map.on('click', (e) => {
    //   console.log(e.latlng);
    // });

  }

  // public addMarker(lat: number, lng: number, name: string): void {
  //   L.marker([lat, lng]).addTo(this.map)
  //   .bindPopup("<b>" + name + "</b><br />cases reported.").openPopup();
  // }

}
