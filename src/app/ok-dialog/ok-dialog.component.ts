import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

declare var $: any;


/**
 * General alert/confirm dialog.
 * Usage:
 * html:
 * <app-ok-dialog></app-ok-dialog>
 * (once in the whole view)
 *
 * js:
    @ViewChild(OkDialogComponent)
    dialog: OkDialogComponent;
 *
 *   ...
    this.dialog.show('Title', 'message', 'warning', () => {}, 'Usuń');
 *   or just
    this.dialog.show('Title', 'msg');
 */

@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.less']
})
export class OkDialogComponent implements OnInit {
  title = '';
  msg = '';
  acceptCb: Function;
  bgclass = '';
  cancel = ''

  //use for heavier dialogs
  @Output() clickedBtn = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  show(title: string, msg: string, level = 'info', acceptCb: Function = undefined, cancel='') {
    this.msg = msg;
    this.title = title;
    this.cancel = cancel; //if !='' => will be shown, and do nothing

    if (level === 'warning') {
      this.bgclass = 'bg-darkwarning';
    } else if (level === 'danger') {
      this.bgclass = 'bg-darkdanger';
    }

    if (acceptCb === undefined) {
      this.acceptCb = () => {
      };
    } else {
      this.acceptCb = acceptCb;
    }
    $('#mod').modal('show');
  }

  accept() {
    // this.clickedBtn.emit('accepted!');
    if (this.acceptCb !== undefined) {
      this.acceptCb();
    }
  }
}
