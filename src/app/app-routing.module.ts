import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoteComponent} from "./vote/vote.component";
import {LoginComponent} from "./login/login.component";
import {GuardianService} from "./guardian.service";
import {ChoiceComponent} from "./choice/choice.component";
import {VoteguardService} from "./voteguard.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [VoteguardService]},
  { path: 'choice', component: ChoiceComponent, canActivate: [GuardianService, VoteguardService]},
  { path: 'vote', component: VoteComponent, canActivate: [GuardianService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
