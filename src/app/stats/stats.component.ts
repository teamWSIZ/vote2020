import {Component, OnInit} from '@angular/core';
import {GService} from '../g.service';


@Component({
  selector: 'app-algo',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  constructor(public g: GService) {
  }

  ngOnInit() {

  }

}
