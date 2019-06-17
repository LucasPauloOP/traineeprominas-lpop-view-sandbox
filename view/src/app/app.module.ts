import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <----NgModel lives here

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HeroesComponent} from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
