import {Component, OnInit} from '@angular/core';
import {Choice} from "../_model/choice";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {VoteData} from "../_model/vote-data";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {
  vote_title = 'Wybory testowe 2020';
  choices: Choice[] = [];
  selected: Choice;

  constructor(private http: HttpClient, private g: GService) {
    console.log(`Tworzę komponent vote`);
  }

  ngOnInit(): void {
    let url = this.g.data + `/choices?electionid=${this.g.selected_election.electionid}`;
    this.http.get<Choice[]>(url).subscribe(chs => {
      chs.sort((a, b) => a.visibleid.localeCompare(b.visibleid));
      this.choices = chs;
    })
  }

  select(choice: Choice) {
    this.choices.forEach(ch => {
      ch.selected = false;
    });
    choice.selected = true;
    this.selected = choice;
  }

  vote() {
    let res = [];
    this.choices.forEach(ch => {
      let vote = 0;
      if (ch.selected) vote = 1;
      res.push(new VoteData(1, ch.choiceid, vote));
    });
    let url = `${this.g.data}/vote?election_token=${this.g.election_token}`
    this.http.post<string>(url, res).subscribe(r => {
      alert('Dzięki za wzięcie udziału w wyborach!');
    }, error => {
      alert('Wystąpił błąd zapisu wyniku; Twój głos niestety nie może być przyjęty. Spróbuj może za chwilę, ' +
        'nie restartując przeglądarki.')
    });


  }
}
