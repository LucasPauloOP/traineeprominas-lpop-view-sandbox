import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserComponent} from './user/user.component';
import {UserPostComponent} from './user/user-post/user-post.component';
import {UserPutComponent} from './user/user-put/user-put.component';
import {UserGetidComponent} from './user/user-getid/user-getid.component' 
import {UserDeleteComponent} from './user/user-delete/user-delete.component';

/*teacher*/
import{TeacherComponent} from './teacher/teacher/teacher.component';
import{TeacherPostComponent} from './teacher/teacher-post/teacher-post.component';
import{TeacherPutComponent} from './teacher/teacher-put/teacher-put.component';
import{TeacherGetidComponent} from './teacher/teacher-getid/teacher-getid.component';


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


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
