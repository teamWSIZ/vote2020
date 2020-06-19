import {Component, Input, OnInit} from '@angular/core';
import {Choice} from "../_model/choice";

@Component({
  selector: 'app-choice-view',
  templateUrl: './choice-view.component.html',
  styleUrls: ['./choice-view.component.less']
})
export class ChoiceViewComponent implements OnInit {
  @Input()
  choice: Choice;

  constructor() { }

  ngOnInit(): void {
  }

}
