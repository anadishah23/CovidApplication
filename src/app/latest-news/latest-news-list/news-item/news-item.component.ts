import { Component, OnInit, Input } from '@angular/core';
import { NewsInfo } from 'src/app/model/add-news.model';
import { LatestNewsService } from '../../latest-news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem : NewsInfo;
  @Input() index: number;

  constructor(private latestNewsService: LatestNewsService) { }

  ngOnInit(): void {
  }


}
