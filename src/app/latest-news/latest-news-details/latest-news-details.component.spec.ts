import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsDetailsComponent } from './latest-news-details.component';

describe('LatestNewsDetailsComponent', () => {
  let component: LatestNewsDetailsComponent;
  let fixture: ComponentFixture<LatestNewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one new.newsTitle', async(() => {
    expect(component.new.newsTitle.length).toBeGreaterThanOrEqual(1);
  }));

  it('should have one news', async(() => {
    expect(component.news.length).toBeGreaterThanOrEqual(1);
  }));
});
