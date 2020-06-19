import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GService {
  data = 'http://10.10.0.200:2020';
  constructor() { }
}
