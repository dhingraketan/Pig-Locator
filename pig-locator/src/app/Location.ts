export class Location {
  name!: string;
  lng!: number;
  lat!: number;

  constructor(name: string, lng: number, lat: number) {
    this.name = name;
    this.lng = lng;
    this.lat = lat;
  }

}