import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { StatedataService } from './statedata.service';
import { Statewisedata } from '../../model/statewisedata-model';
import { Allstates } from '../../model/allstates-model';

import { CovidDistrictReport } from '../../model/IStateDistrictData.interface'
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-statedata',
  templateUrl: './statedata.component.html'
})


export class StatedataComponent implements OnInit {

  statewisedata : CovidDistrictReport;

  private _url: string ="https://api.covid19india.org/state_district_wise.json";
  constructor(private http : HttpClient,private _statedataService : StatedataService, private route: ActivatedRoute,private Log:LoggingService) { }

   _districtData : any;

  ngOnInit(){
    
    const name = this.route.snapshot.queryParamMap.get('state');
    this.getstatedata(name);
  }
  getstatedata(name:string){

    this.Log.loggingInfo("Get the response data in statedataComponent");
    this._statedataService.getStateData().subscribe(
        data => {
          this.statewisedata = data;
          this._districtData = (this.statewisedata[name].districtData);
          
}) 
  }
}