import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatsComponent} from "./stats/stats.component";
import {AdmComponent} from './adm/adm.component';
import {ProductsComponent} from "./products/products.component";
import {VhomeComponent} from "./vhome/vhome.component";
import {ImgfitComponent} from "./imgfit/imgfit.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: VhomeComponent },
  { path: 'alt', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'fit', component: ImgfitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
