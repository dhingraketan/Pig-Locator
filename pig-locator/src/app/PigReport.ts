import { Locaion } from "./Location";

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
  location!: Locaion;
  dateNtime!: Date;
  status!: Status;
  notes!: string;

  constructor(reporterFirstName: string, reporterLastName: string, reporterPhone: string, pid: number, breed: string, location: Locaion, notes: string) {
    this.reporterFirstName = reporterFirstName;
    this.reporterLastName = reporterLastName;
    this.reporterPhone = reporterPhone;
    this.pid = pid;
    this.breed = breed;
    this.location = location;
    this.dateNtime = new Date();
    this.status = Status.ready;
    this.notes = notes;
  }


  // public toogleStatus(): void {
  //   if (this.status == Status.ready) {
  //     this.status = Status.retrieved;
  //   } else {
  //     this.status = Status.ready;
  //   }
  // }
}