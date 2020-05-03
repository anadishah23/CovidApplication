import { Component, OnInit , Input} from '@angular/core';
import { NewsInfo } from 'src/app/model/add-news.model';
import { LatestNewsService } from '../latest-news.service';
import { ActivatedRoute ,Params, Router} from '@angular/router';

@Component({
  selector: 'app-latest-news-details',
  templateUrl: './latest-news-details.component.html',
  styleUrls: ['./latest-news-details.component.scss']
})
export class LatestNewsDetailsComponent implements OnInit {

  constructor(private latestNewsService : LatestNewsService,
              private route : ActivatedRoute,
              ) {
     }

  id: number;
  new: NewsInfo;
  news : NewsInfo[]; 

  ngOnInit() {
    this.latestNewsService.getCovidNews().subscribe(
      (response) =>
    {
      this.news = response;
      this.route.params
       .subscribe(
         (params: Params) => {
           this.id = + params['id'];
           this.new = this.news[this.id];
         }
       );
  }, (error) =>{
    alert("Getting Error response");
    error = error;
    return false;
  })
  }
}
