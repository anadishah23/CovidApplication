import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsListComponent } from './latest-news-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideRoutes } from '@angular/router';
import { LatestNewsService } from '../latest-news.service';

describe('LatestNewsListComponent', () => {
  let component: LatestNewsListComponent;
  let fixture: ComponentFixture<LatestNewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ LatestNewsListComponent ],
      providers : [LatestNewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: LatestNewsService = TestBed.get(LatestNewsService);
    expect(LatestNewsService).toBeTruthy();
  });

  it('should have one news', async(() => {
    expect(component.news.length).toBeGreaterThanOrEqual(1);
  }));

  it('should have getCovidNews() function', () => {
    const service: LatestNewsService = TestBed.get(LatestNewsService);
    expect(service.getCovidNews).toBeTruthy();
   });

});
