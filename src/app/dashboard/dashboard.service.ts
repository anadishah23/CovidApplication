import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../model/dashboard-model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _url: string ="https://api.covid19india.org/data.json";
  constructor(private http : HttpClient,private Log:LoggingService) { }

  getStateData():Observable<Dashboard>{
    this.Log.loggingInfo("Getting data into DashboardService");
    return this.http.get<Dashboard>(this._url);
  }
}
