import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LatestNewsDetailsComponent } from '../latest-news/latest-news-details/latest-news-details.component';
import { DefaultNewsComponent } from '../latest-news/default-news/default-news.component';
import { LatestNewsRoutingModule } from '../latest-news/latest-news.routing';


@NgModule({
  declarations: [
    DefaultNewsComponent,
    LatestNewsDetailsComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    LatestNewsRoutingModule
  ]
})
export class LatestNewModule {}
