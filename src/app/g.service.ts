import { Injectable } from '@angular/core';
import {Election} from "./_model/election";

@Injectable({
  providedIn: 'root'
})
export class GService {
  data = 'http://10.10.0.200:2020';
  uuid: string;
  wdauth: string;
  selected_election: Election;
  constructor() { }
}
