import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*user*/
import {UserComponent} from './user/user.component';
import {UserPostComponent} from './user/user-post/user-post.component';


const routes: Routes = [
{path: 'user', component: UserComponent },

{path: 'create/user',component: UserPostComponent,},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
