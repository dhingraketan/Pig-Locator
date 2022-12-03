import { Locaion } from "./Location";

enum Status{
  ready = "READY FOR PICKUP",
  retrieved = "RETRIEVED"
}

export class PigReport {
  private reporterName!: string;
  private reporterPhone!: string;
  private pid!: number;
  private breed!: string;
  private location!: Locaion;
  private dateNtime!: Date;
  private status!: Status;
  private notes!: string;

  constructor(reporterName: string, reporterPhone: string, pid: number, breed: string, location: Locaion, notes: string) {
    this.reporterName = reporterName;
    this.reporterPhone = reporterPhone;
    this.pid = pid;
    this.breed = breed;
    this.location = location;
    this.dateNtime = new Date();
    this.status = Status.ready;
    this.notes = notes;
  }

  //Getters
  public getReporterName() {
    return this.reporterName;
  }

  public getReporterPhone() {
    return this.reporterPhone;
  }

  public getPid() {
    return this.pid;
  }

  public getBreed() {
    return this.breed;
  }

  public getLocation() {
    return this.location;
  }

  public getDateNtime() {
    return this.dateNtime;
  }

  public getStatus() {
    return this.status;
  }

  public getNotes() {
    return this.notes;
  }

  public pickedUp() {
    this.status = Status.retrieved;
  }

  

}