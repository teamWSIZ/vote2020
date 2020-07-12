import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class VoteguardService implements CanActivate {
  is_voting = false; //if true, no route will be allowed; must turn off explicitly

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(`voteguard check`);
    if (this.is_voting) return false;
    return true;
  }
}
