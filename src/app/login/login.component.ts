import {Component, OnInit, ViewChild} from '@angular/core';
import {GuardianService} from "../guardian.service";
import {AdminguardianService} from "../adminguardian.service";
import {Md5} from "ts-md5";
import {Router} from "@angular/router";
import {GService} from "../g.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../_model/user";
import {OkDialogComponent} from "../ok-dialog/ok-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})



export class LoginComponent implements OnInit {
  @ViewChild(OkDialogComponent)
  dialog: OkDialogComponent;

  user = '';
  pass = '';

  constructor(private http: HttpClient,
              private g: GService,
              private router: Router,
              public guard: GuardianService, public admin: AdminguardianService) {

  }

  ngOnInit(): void {
  }


  login() {
    let pass = Md5.hashStr(this.pass);

    let url = this.g.data + `/login?user=${this.user}&pass=${pass}`;
    this.http.get<any>(url).subscribe(res => {
      this.g.wdauth = res.authtoken;
      this.guard.logged_in = true;
      this.router.navigate(['/choice']);
    }, error => {
      this.dialog.show('Błąd logowania',
        'Użyto niepoprawnych danych autentykacyjnych, lub serwis logowania ma problemy. Prosimy sprawdzić ' +
        'parę login/hasło i spróbować ponownie', 'danger', ()=>{
        });

    });


  }
}

