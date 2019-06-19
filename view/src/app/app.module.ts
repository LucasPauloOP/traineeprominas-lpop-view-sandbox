import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

//----------------user-----------------------------------------------
import { UserComponent } from './user/user.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import  {UserPutComponent } from './user/user-put/user-put.component';
import  { UserGetidComponent } from './user/user-getid/user-getid.component'
import  {UserDeleteComponent } from './user/user-delete/user-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 


@NgModule({
  declarations: [
    AppComponent,
     UserComponent,
     UserPostComponent,
     UserPutComponent,
     UserGetidComponent,
     UserDeleteComponent
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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
