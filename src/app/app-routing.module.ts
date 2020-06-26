import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoteComponent} from "./vote/vote.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {ResultsComponent} from "./results/results.component";
import {GuardianService} from "./guardian.service";
import {AdminguardianService} from "./adminguardian.service";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [GuardianService, AdminguardianService]},
  { path: 'results', component: ResultsComponent, canActivate: [GuardianService]},
  { path: 'vote', component: VoteComponent, canActivate: [GuardianService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
