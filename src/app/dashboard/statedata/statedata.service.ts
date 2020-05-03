import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CovidDistrictReport } from '../../model/IStateDistrictData.interface';
import { Observable } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';


@Injectable({
  providedIn: 'root'
})
export class StatedataService {
  
  data : any;
  stringify : string;
  private _url: string ="https://api.covid19india.org/state_district_wise.json";
  constructor(private http : HttpClient,private Log:LoggingService) { }

  getData(){
    this.http.get(this._url).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.data=data;
      this.stringify=JSON.stringify(data);
    })
    return this.stringify;

  }
  
  getStateData():Observable<CovidDistrictReport>{
    this.Log.loggingInfo("fetching the StateData");
  return this.http.get<CovidDistrictReport>(this._url);
  }
}
