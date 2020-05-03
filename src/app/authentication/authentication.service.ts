import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoggingService } from '../logging.service';

@Injectable({providedIn:'root'})
export class AuthService{

    displayName : string ;
    constructor(private http: HttpClient,private Log:LoggingService){

    }


    checkLoginCredential(username:string):Observable<User[]>{
        this.displayName = username;
        this.Log.loggingSuccess("Users data successfully fetched");
        return this.http.get<User[]>('api/users?username='+username);
         
    }

    loggedIn() : boolean {
        
        return !!localStorage.getItem("currentUser");
    }

    onLogout(){
        localStorage.removeItem("currentUser");
    }

}