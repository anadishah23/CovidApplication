import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemComponent } from './news-item.component';
import { LatestNewsService } from '../../latest-news.service';
import { HttpClient } from '@angular/common/http';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClient],
      declarations: [ NewsItemComponent ],
      providers : [LatestNewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one newItem', async(() => {
    expect(component.newsItem.newsTitle.length).toBeGreaterThanOrEqual(1);
  }));

  it('should have one index ', async(() => {
    expect(component.index.valueOf).toBeGreaterThanOrEqual(0);
  }));
});
