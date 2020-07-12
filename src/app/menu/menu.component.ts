import { Component, OnInit } from '@angular/core';
import {GService} from '../g.service';
import {GuardianService} from "../guardian.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(public g: GService, public guard: GuardianService) { }

  ngOnInit() {
  }

  logout() {
    this.guard.logged_in = false;
  }
}
