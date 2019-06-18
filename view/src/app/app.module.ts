import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <----NgModel lives here

import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
import {HeroesComponent} from './test/test.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestMessagesComponent } from './test-messages/test-messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    HeroesComponent,
    TestDetailComponent,
    TestMessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
