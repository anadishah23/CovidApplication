import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatedataComponent } from './dashboard/statedata/statedata.component'


export const appRoutes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:"full"},
  { path: 'dashboard', component: DashboardComponent},
  {path : 'statedata' , component : StatedataComponent},
  { path: 'precautions', component: PrecautionsComponent},
  { path: 'news', 
  loadChildren:() => import('./latest-news/latest-news.module').then(
    m=>m.LatestNewModule)
},
  { path: 'login', 
  loadChildren:() => import('./authentication/authentication.module').then(
    m => m.AuthenticationModule)
},
  {path: 'addNew',
  loadChildren: () => import('./latest-news/add-new-news/add-new.module') .then(
    m=>m.AddNewModule)
},
  {path: 'not-found', component:PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
