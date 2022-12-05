import { Injectable } from '@angular/core';
import { LocInfo } from '../LocInfo';

@Injectable({
  providedIn: 'root'
})
export class PopulateMapService {

  constructor() { }

  public locArr!: LocInfo[];
}
