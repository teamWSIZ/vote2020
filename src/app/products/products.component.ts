import {Component, OnInit} from '@angular/core';
import {CardData} from '../_model/card-data';
import {HttpClient} from '@angular/common/http';
import {GService} from '../g.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  cards: CardData[] = [];
  editedCard: CardData = new CardData(0, 0, '', '', '', 0);
  my_category = 11;

  constructor(private http: HttpClient, public g: GService) {
  }


  ngOnInit() {
    // this.cards = [];

    //wykorzystanie serwisu z danymi
    this.http.get<CardData[]>(`http://10.10.0.200:8070/cards?catid=${this.my_category}`).subscribe(cc => {
      this.cards = cc;
    });

  }

  edit_card(c: CardData) {
    this.editedCard = c;
  }

  cancel() {
    // alert('nic nie zostało zapisane');
  }

  accept() {
    //tu trzeba zapisać zmiany w serwisie backendowym...
    //dane mamy w this.editedCard
    if (this.editedCard.id > 0) {
      this.http.post('http://10.10.0.200:8070/cards/update', this.editedCard).subscribe(cc => {
        alert('zmiany zapisane w serwisie backendowym');
      });
    } else {
      //to jest zapis nowej kartki
      this.http.post('http://10.10.0.200:8070/cards/insert', this.editedCard).subscribe(cc => {
        alert('zmiany zapisane w serwisie backendowym');
        this.cards.push(this.editedCard);
      });
    }
  }

  new_card() {
    let new_empty_card = new CardData(0, this.my_category, '---', 'Lorem ipsum', 'https://dummy', 0);
    this.editedCard = new_empty_card;
  }

  delete_card() {
    let id = this.editedCard.id;
    if (id>0) {
      this.http.delete('http://10.10.0.200:8070/cards/delete?id=' + id).subscribe(cc => {
        alert('element usunięty z serwisu backendowego');
        //usunięcie z tablicy `cards`
        const at = this.cards.indexOf(this.editedCard);
        if (at > -1) {
          this.cards.splice(at, 1);
        }
      });
    }

  }
}
