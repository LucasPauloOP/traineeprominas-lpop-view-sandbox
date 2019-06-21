import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule,  MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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

//--------------------------------Student------------------------------------------------------------
import { StudentComponent } from './student/student/student.component';
import { StudentPostComponent } from './student/student-post/student-post.component';
import { StudentPutComponent } from './student/student-put/student-put.component';
import { StudentGetidComponent } from './student/student-getid/student-getid.component';


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
     StudentComponent,
     StudentPostComponent,
     StudentPutComponent,
     StudentGetidComponent,
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
    LayoutModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
