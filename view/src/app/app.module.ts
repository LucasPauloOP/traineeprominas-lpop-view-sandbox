import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <----NgModel lives here
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
     UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
