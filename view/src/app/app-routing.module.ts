import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserComponent} from './user/user.component';
import {UserPostComponent} from './user/user-post/user-post.component';
import {UserPutComponent} from './user/user-put/user-put.component';
import {UserGetidComponent} from './user/user-getid/user-getid.component' 

/*teacher*/
import{TeacherComponent} from './teacher/teacher/teacher.component';
import{TeacherPostComponent} from './teacher/teacher-post/teacher-post.component';
import{TeacherPutComponent} from './teacher/teacher-put/teacher-put.component';
import{TeacherGetidComponent} from './teacher/teacher-getid/teacher-getid.component';

/*course*/
import {CourseComponent} from './course/course/course.component';
import {CoursePostComponent} from './course/course-post/course-post.component';
import {CoursePutComponent} from './course/course-put/course-put.component';
import {CourseGetidComponent} from './course/course-getid/course-getid.component';

/*student*/


const routes: Routes = [

/*-----------------------------------user----------------------------------------------------------*/
{path: 'user', component: UserComponent,  data: { title: 'Lista de usuários' } },

{path: 'user/create', component: UserPostComponent,  data: { title: 'Cadastro de usuário' }},

{path: 'user/update/:id', component: UserPutComponent,  data: { title: 'Editar usuário' }},

{path:  'user/:id', component:UserGetidComponent,  data: { title: 'Detalhes do usuário' }},


/*------------------------------------teacher------------------------------------------------------*/
{path: 'teacher', component: TeacherComponent,  data: { title: 'Lista de professors' } },

{path: 'teacher/create', component: TeacherPostComponent,  data: { title: 'Cadastro de professor' }},

{path: 'teacher/update/:id', component: TeacherPutComponent,  data: { title: 'Editar professor' }},

{path:  'teacher/:id', component:TeacherGetidComponent,  data: { title: 'Detalhes do professor' }},


/*----------------------------------course---------------------------------------------------------*/
{path: 'course', component: CourseComponent,  data: { title: 'Lista de curso' } },

{path: 'course/create', component: CoursePostComponent,  data: { title: 'Cadastro de curso' }},

{path: 'course/update/:id', component: CoursePutComponent,  data: { title: 'Editar curso' }},

{path:  'course/:id', component: CourseGetidComponent,  data: { title: 'Detalhes do curso' }},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
