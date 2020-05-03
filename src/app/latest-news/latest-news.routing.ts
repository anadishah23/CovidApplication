import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { DefaultNewsComponent } from '../latest-news/default-news/default-news.component';
import { LatestNewsDetailsComponent } from '../latest-news/latest-news-details/latest-news-details.component';

const routes: Routes = [
  {
    path: '',
    component: LatestNewsComponent,
    children: [
            { path: '', component: DefaultNewsComponent },
            { path: ':id', component: LatestNewsDetailsComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestNewsRoutingModule {}
