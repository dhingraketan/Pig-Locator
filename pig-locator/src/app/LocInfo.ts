import { Location } from "./Location";

export class LocInfo {
  location!: Location;
  numCases!: number;

  constructor(location: Location, numCases: number) {
    this.location = location;
    this.numCases = numCases;
  }

}