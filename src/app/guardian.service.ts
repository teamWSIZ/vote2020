import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {
  logged_in = false;

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(`guard check`);
    if (this.logged_in) {
      return true;
    } else {
      return false;
    }
  }

}
