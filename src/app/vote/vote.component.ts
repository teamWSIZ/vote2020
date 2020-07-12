import {Component, OnInit, ViewChild} from '@angular/core';
import {Choice} from "../_model/choice";
import {HttpClient} from "@angular/common/http";
import {GService} from "../g.service";
import {VoteData} from "../_model/vote-data";
import {Router} from "@angular/router";
import {OkDialogComponent} from "../ok-dialog/ok-dialog.component";
import {GuardianService} from "../guardian.service";
import {VoteguardService} from "../voteguard.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.less']
})
export class VoteComponent implements OnInit {
  @ViewChild(OkDialogComponent)
  dialog: OkDialogComponent;

  vote_title = 'Wybory testowe 2020';
  choices: Choice[] = [];
  selected: Choice;

  constructor(private http: HttpClient, private g: GService,
              private router: Router,
              private guardian: GuardianService,
              private voteguard: VoteguardService) {
    console.log(`Tworzę komponent vote`);
  }

  ngOnInit(): void {
    let url = this.g.data + `/choices?electionid=${this.g.selected_election.electionid}`;
    this.http.get<Choice[]>(url).subscribe(chs => {
      chs.sort((a, b) => a.visibleid.localeCompare(b.visibleid));
      this.choices = chs;
      this.voteguard.is_voting = true; //do not allow any redicects, back etc
      this.dialog.show('Karta wyboracza',
        'Przystępujesz do głosowania. Proszę kliknąć w jednym z kwadratowych okien, by zaznaczyć swój wybór, ' +
        'a następnie kliknąć w przycisk "Oddaj głos". Uwaga: odświeżenie strony, zamknięcie przeglądarki itp' +
        ' spowodują nieodwracalną utratę możliwości oddania głosu w aktualnych wyborach.', 'danger', () => {
        });
    })
  }

  select(choice: Choice) {
    console.log(`selected: ${choice.title}`)
    this.choices.forEach(ch => {
      ch.selected = false;
    });
    choice.selected = true;
    this.selected = choice;
  }

  vote() {
    console.log(`submitting voting...`);
    let res = [];
    this.choices.forEach(ch => {
      let vote = 0;
      if (ch.selected) vote = 1;
      res.push(new VoteData(this.g.selected_election.electionid, ch.choiceid, vote));
    });
    let url = `${this.g.data}/vote?election_token=${this.g.election_token}`
    this.http.post<string>(url, res).subscribe(r => {
      // alert('Dziękujemy za wzięcie udziału w wyborach! Twój głos został zapisany. Zostaniesz automatycznie wylogowany.');

      this.dialog.show('Twój głos został zapisany',
        'Dziękujemy za wzięcie udziału w wyborach! Zostaniesz automatycznie wylogowany.', 'success', () => {
          this.exit_to_login();
        });

    }, error => {
      if (error.status === 410) {
        this.dialog.show('Karta straciła ważność',
          'Twoja karta wyborcza straciła ważność. Prawdopodobnie wybory zakończyły się zanim oddałeś głos.' +
          ' Niestety Twój głos nie zostanie wliczony do wyników.', 'danger', () => {
            this.exit_to_login();
          });
      } else {
        this.dialog.show('Błąd zapisu wyniku',
          'Wystąpił błąd zapisu wyniku; Twój głos na teraz niestety nie może być przyjęty. Spróbuj może za chwilę, ' +
          'nie restartując przeglądarki.', 'danger', () => {
          });
      }
    });


  }

  exit_to_login() {
    this.g.logout();
    this.voteguard.is_voting = false;
    this.router.navigate(['login']);
  }
}
