import {
    CanActivate,
    Router
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { ToastrService } from 'ngx-toastr';
import { AuthService } from './authentication.service';
import { LoggingService } from '../logging.service';
  
  
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _authService : AuthService, private _loggingService : LoggingService) {
    }
  
    canActivate(): boolean {
        this._loggingService.loggingInfo("Inside canActivate");
        if(this._authService.loggedIn()){
            
        this._loggingService.loggingSuccess("Gaurd not Activated");
            return true;
        } else {
            
        this._loggingService.loggingError("Gaurd Activated");
            this._router.navigate(['/login']);
           // this._toastrService.warning('Please login to continue!', 'User Management Portal');
        }
  }
}