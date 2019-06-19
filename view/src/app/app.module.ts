import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { UserComponent } from './user/user.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import { UserPutComponent } from './user-put/user-put.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserGetidComponent } from './user-getid/user-getid.component';

@NgModule({
  declarations: [
    AppComponent,
     UserComponent,
     UserPostComponent,
     UserPutComponent,
     UserDeleteComponent,
     UserGetidComponent,
  ],
  imports: [
    BrowserModule,
    FormBuilder,
     FormGroup, 
     NgForm, 
     Validators,
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
