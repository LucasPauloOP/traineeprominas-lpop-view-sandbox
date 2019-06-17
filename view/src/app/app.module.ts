import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <----NgModel lives here

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HeroesComponent} from './test/test.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { TestMessagesComponent } from './test-messages/test-messages.component';
import { TestMessagesServiceComponent } from './test-messages-service/test-messages-service.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroesComponent,
    TestDetailComponent,
    TestServiceComponent,
    TestMessagesComponent,
    TestMessagesServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
