import { Component, OnInit } from '@angular/core';
import { NewsInfo } from 'src/app/model/add-news.model';
import { LatestNewsService } from '../latest-news.service';

@Component({
  selector: 'app-latest-news-list',
  templateUrl: './latest-news-list.component.html',
  styleUrls: ['./latest-news-list.component.scss'],
  providers :[LatestNewsService]
})
export class LatestNewsListComponent implements OnInit {

  news : NewsInfo[] ;
  count : number ;
  constructor(private latestNewsService : LatestNewsService) { }

  ngOnInit(): void {
    this.latestNewsService.getCovidNews().subscribe(
      (response) =>
    {
      this.news = response;
  }, (error) =>{
    error = error;
    return false;
  }
    )
}
}
