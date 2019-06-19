import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';

//--------------------------------User-----------------------------------------------
import { UserComponent } from './user/user.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import  {UserPutComponent } from './user/user-put/user-put.component';
import  { UserGetidComponent } from './user/user-getid/user-getid.component'
import { UserDetalheComponent } from './user/user-detalhe/user-detalhe.component';

//-------------------------------Teacher--------------------------------------------------------------
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { TeacherPostComponent } from './teacher/teacher-post/teacher-post.component';
import { TeacherPutComponent } from './teacher/teacher-put/teacher-put.component';
import { TeacherGetidComponent } from './teacher/teacher-getid/teacher-getid.component';

//--------------------------------Course-----------------------------------------------------------
import { CourseComponent } from './course/course/course.component';
import { CoursePostComponent } from './course/course-post/course-post.component';
import { CoursePutComponent } from './course/course-put/course-put.component';
import { CourseGetidComponent } from './course/course-getid/course-getid.component';


@NgModule({
  declarations: [
    AppComponent,
     UserComponent,
     UserPostComponent,
     UserPutComponent,
     UserGetidComponent,
     MenuComponent,
     UserDetalheComponent,
     TeacherComponent,
     TeacherPostComponent,
     TeacherPutComponent,
     TeacherGetidComponent,
     CourseComponent,
     CoursePostComponent,
     CoursePutComponent,
     CourseGetidComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
