import {
    CanActivate,
    Router
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { ToastrService } from 'ngx-toastr';
import { AuthService } from './authentication.service';
import { LoggingService } from '../logging.service';
  
  
  @Injectable({ providedIn: 'root' })
  export class AuthLoginGuard implements CanActivate {
    constructor(private _router: Router, private _authService : AuthService, private _loggingService : LoggingService) {
    }
  
    canActivate(): boolean {
        this._loggingService.loggingInfo("Inside canActivate");
        if(this._authService.loggedIn()){
            this._router.navigate(['/dashboard']);
        this._loggingService.loggingSuccess("Alerady logged In");
            return false;
        } else {
            
        this._loggingService.loggingError("Not Logged In");
        return true;
           // this._toastrService.warning('Please login to continue!', 'User Management Portal');
        }
  }
}