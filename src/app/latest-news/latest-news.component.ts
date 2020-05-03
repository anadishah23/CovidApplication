import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from './latest-news.service';
import { NewsInfo } from '../model/add-news.model';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  providers: [LatestNewsService]
})
export class LatestNewsComponent implements OnInit {

  selectedNews: NewsInfo;
  constructor(private latestNewsService: LatestNewsService,private Log:LoggingService) { }

  ngOnInit(): void {
    this.Log.loggingInfo("initialising data on Init() of LatestNewsComponent");
    this.latestNewsService.newsSelected
      .subscribe(
        (news: NewsInfo) => {
          this.selectedNews = news;
        }
      );
  }

}
