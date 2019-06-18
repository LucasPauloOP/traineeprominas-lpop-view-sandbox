import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './test/test.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { TestDetailComponent } from './test-detail/test-detail.component';

const routes: Routes = [
{path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: TestDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
