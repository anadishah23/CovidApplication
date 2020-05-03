import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { LoggingService } from '../logging.service';
import { StatedataComponent } from './statedata/statedata.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
 let http : HttpClient;
  let _dashboardservice = new DashboardService(http,new LoggingService());
  let _statedatacomp : StatedataComponent;
  let Log:LoggingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClient],
      declarations: [ DashboardComponent ],
      providers : [DashboardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new DashboardComponent(_dashboardservice,_statedatacomp,Log);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getData function', () => {
    //const service: DashboardService = TestBed.get(DashboardService);
    expect(_dashboardservice.getStateData).toBeTruthy();
   });
  

  it('should have one _statedata', async(() => {
    expect(component.getdashstate("delhi")).toBeGreaterThanOrEqual(1);
  }));
});
