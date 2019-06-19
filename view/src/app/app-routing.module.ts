import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserComponent} from './user/user.component';
import {UserPostComponent} from './user/user-post/user-post.component';
import {UserPutComponent} from './user/user-put/user-put.component';
import {UserGetidComponent} from './user/user-getid/user-getid.component' 
import {UserDeleteComponent} from './user/user-delete/user-delete.component';



const routes: Routes = [

  /*-----------------------------------user----------------------------------------------------------*/
{path: 'user', component: UserComponent,  data: { title: 'Lista de usuários' } },

{path: 'create/user', component: UserPostComponent,  data: { title: 'Cadastro de usuário' }},

{path: 'put/user', component: UserPutComponent,  data: { title: 'Editar usuário' }},

{path:  'getid/user', component:UserGetidComponent,  data: { title: 'Detalhes do usuário' }},
// { path: '',redirectTo: '/produtos',pathMatch: 'full'}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
