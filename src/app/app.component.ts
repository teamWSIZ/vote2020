import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {GService} from './g.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router, private g: GService) {
  }

  // podłączenie globalnej reakcji na klawisze
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(JSON.stringify(event.key));
    if (event.key === '@') {
      // this.router.navigate(['adm']);
    } else if (event.shiftKey && event.key === 'Enter') {
      // shift-enter włącza tryb admina
    }
  }

}
