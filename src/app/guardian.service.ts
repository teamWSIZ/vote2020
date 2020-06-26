import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {
  logged_in = false;

  constructor() {
    console.log(`Tworzę serwis guardian`);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.logged_in) {
      console.log('Pozwalamy na wejście do komponentu');
      return true;
    } else {
      console.log('Zabronione wejście do komponentu');
      return false;
    }
  }

}
