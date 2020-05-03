import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NewsInfo } from '../model/add-news.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { newArray } from '@angular/compiler/src/util';
// const header = {headers: new HttpHeaders({
//     'Content-Type' : 'application/json'
// })};

@Injectable()
export class LatestNewsService{
  newsSelected = new EventEmitter<NewsInfo>();

  private newz: NewsInfo;

  private newCount : NewsInfo[] = [];

  constructor(private http: HttpClient) {
  }

  getCovidNews():Observable<NewsInfo[]> {
    return this.http.get<NewsInfo[]>('api/news');
     
  }

  addNews(news : NewsInfo):Observable<NewsInfo> {
    console.log(news);
    return this.http.post<NewsInfo>('/api/news',news,{
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }).pipe
    (   
        catchError(      
            this.handleError
            )
    );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
    }
  
  getNews(id:number){
    
      return this.newz[id];
      }

}
