import {Component, Input, OnInit} from '@angular/core';
import {CardData} from '../_model/card-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input()
  info: CardData;

  constructor() { }

  ngOnInit(): void {
  }

}
