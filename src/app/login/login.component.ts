import { Component, OnInit } from '@angular/core';
import {GuardianService} from "../guardian.service";
import {AdminguardianService} from "../adminguardian.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public guard: GuardianService, public admin: AdminguardianService) {
    console.log(`Tworzę komponent login`);

  }

  ngOnInit(): void {
  }

  log_in_user() {
    this.guard.logged_in = true;
  }

  log_in_admin() {
    this.guard.logged_in = true;
    this.admin.is_admin = true;
  }
}
