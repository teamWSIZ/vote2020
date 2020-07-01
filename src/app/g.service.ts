import {Injectable} from '@angular/core';
import {Election} from "./_model/election";

@Injectable({
  providedIn: 'root'
})
export class GService {
  data = 'http://10.10.0.200:2019';  //development
  // data = 'https://vote.wsi.edu.pl/api'; //production
  uuid: string;
  wdauth: string;
  selected_election: Election;
  election_token = '';
  constructor() {
  }
  logout() {
    this.uuid = '';
    this.wdauth = '';
    this.election_token = '';
  }
}
