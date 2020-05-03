import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../model/dashboard-model';
import { DashboardService } from './dashboard.service';
import { StatedataComponent } from './statedata/statedata.component';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public _statedata : Dashboard;

  constructor(private _dashboardservice : DashboardService,
              private _statedatacomp : StatedataComponent,private Log:LoggingService
    
    ) { }

  ngOnInit() {
    this._dashboardservice.getStateData()
    .subscribe(data => this._statedata = data);
    this.Log.loggingInfo("Getting data into DashComponent")
  }

  getdashstate(name:string)
  {
    this._statedatacomp.getstatedata(name);
  }
}
