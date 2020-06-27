import {Component, OnInit} from '@angular/core';
import {Election} from "../_model/election";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.less']
})
export class ChoiceComponent implements OnInit {
  elections: Election[] = [];
  selectedElection: Election;

  constructor(private http: HttpClient, private g: GService, private router: Router) {
  }

  ngOnInit(): void {
    let url = `${this.g.data}/elections?authtoken=${this.g.wdauth}`;
    this.http.get<any>(url).subscribe(res => {
      this.elections = res.elections;
    });
  }

  go_vote() {
    this.g.selected_election = this.selectedElection;
    this.router.navigate(['vote']);

  }
}
