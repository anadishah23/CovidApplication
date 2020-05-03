import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedataComponent } from './statedata.component';
import { HttpClient } from '@angular/common/http';
import { StatedataService } from './statedata.service';
import { ActivatedRoute } from '@angular/router';
import { logging } from 'protractor';
import { LoggingService } from 'src/app/logging.service';

describe('StatedataComponent', () => {
  let component: StatedataComponent;
  let fixture: ComponentFixture<StatedataComponent>;
  let authService;
  let http : HttpClient;
  let router : ActivatedRoute;
  let logging;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClient],
      declarations: [ StatedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    logging = new LoggingService();
    authService = new StatedataService(http,logging);
    component = new StatedataComponent(http,authService,router,logging);
    
  });

   it('should create', () => {
     expect(component).toBeTruthy();
   });

  it('should have one _districtData', async(() => {
    expect(component._districtData.length).toBeGreaterThanOrEqual(1);
  }));

  it('should have one statewisedata', async(() => {
    expect(component.statewisedata.length).toBeGreaterThanOrEqual(1);
  }));
});
