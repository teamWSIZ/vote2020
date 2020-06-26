import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminguardianService implements CanActivate {
  is_admin = false;

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.is_admin) {
      console.log(`Zezwalamy na dostęp administracyjny`);
      return true;
    } else {
      console.log(`Blokujemy dostęp administracyjny`);
      return false;
    }
  }


}
