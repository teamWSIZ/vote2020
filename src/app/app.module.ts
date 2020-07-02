import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { AdminComponent } from './admin/admin.component';
import { ChoiceComponent } from './choice/choice.component';
import { LOCALE_ID } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import {OkDialogComponent} from './ok-dialog/ok-dialog.component';
registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VoteComponent,
    LoginComponent,
    ResultsComponent,
    AdminComponent,
    ChoiceComponent,
    OkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MenuComponent, { provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
