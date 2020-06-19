import {Component, OnInit} from '@angular/core';
import {Choice} from "../_model/choice";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {
  vote_title = 'Wybory testowe 2020';
  choices: Choice[] = [];

  constructor(private http: HttpClient, private g: GService) {
  }

  ngOnInit(): void {
    let url = this.g.data + '/choices?electionid=1';
    this.http.get<Choice[]>(url).subscribe(chs => {
      this.choices = chs;
    })
  }

  select(choice: Choice) {
    this.choices.forEach(ch => {
      ch.selected = false;
    });
    choice.selected = true;
  }
}
