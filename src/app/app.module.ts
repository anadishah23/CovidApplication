import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestNewsListComponent } from './latest-news/latest-news-list/latest-news-list.component';
import { NewsItemComponent } from './latest-news/latest-news-list/news-item/news-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './authentication/authentication.guard';
import { AuthService } from './authentication/authentication.service';
import { LoggingService } from './logging.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatedataComponent } from './dashboard/statedata/statedata.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StatedataComponent,
    LatestNewsComponent,
    LatestNewsListComponent,
    NewsItemComponent,
    PageNotFoundComponent,
    StatedataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,AuthService,LoggingService,StatedataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
