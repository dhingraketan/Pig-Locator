import { Location } from "./Location";

export enum Status {
  ready = "READY FOR PICKUP",
  retrieved = "RETRIEVED"
}

export class PigReport {
  reporterFirstName!: string;
  reporterLastName!: string;
  reporterPhone!: string;
  pid!: number;
  breed!: string;
  location!: Location;
  dateNtime!: Date;
  status!: Status;
  notes!: string;

  constructor(reporterFirstName: string, reporterLastName: string, reporterPhone: string, pid: number, breed: string, location: Location, notes: string, status?: Status, dateNtime?: Date) {
    this.reporterFirstName = reporterFirstName;
    this.reporterLastName = reporterLastName;
    this.reporterPhone = reporterPhone;
    this.pid = pid;
    this.breed = breed;
    this.location = location;
    if(dateNtime == undefined) {
      this.dateNtime = new Date();
    } else {
      this.dateNtime = dateNtime;
    }

    if(status == undefined) {
      this.status = Status.ready;
    } else {
      this.status = status;
    }
    
    this.notes = notes;
  }


  public toogleStatus(): void {
    if (this.status == Status.ready) {
      this.status = Status.retrieved;
    } else {
      this.status = Status.ready;
    }
  }
}