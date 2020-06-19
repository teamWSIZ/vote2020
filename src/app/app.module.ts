import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";
import { StatsComponent } from './stats/stats.component';
import { AdmComponent } from './adm/adm.component';
import { ProductsComponent } from './products/products.component';
import { VhomeComponent } from './vhome/vhome.component';
import { MyInsetComponent } from './my-inset/my-inset.component';
import { ImgfitComponent } from './imgfit/imgfit.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StatsComponent,
    AdmComponent,
    ProductsComponent,
    VhomeComponent,
    MyInsetComponent,
    ImgfitComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
