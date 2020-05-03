import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  dispUser :string;
  constructor(private authService: AuthService, private router : Router,private Log:LoggingService) { }

  ngOnInit(): void {
    this.validateLogin();
  }
  

  validateLogin(){
    this.Log.loggingInfo("validation was "+this.authService.loggedIn());
    this.isAuthenticated = this.authService.loggedIn();
  }

  getUserName(): void {
    this.dispUser = this.authService.displayName;
  }

  logout(): void {
    this.authService.onLogout();
    this.Log.loggingSuccess("Logout successfully");
      window.location.reload();
  }

  ngOnDestroy() : void {
    this.authService.onLogout();
    this.isAuthenticated=false;
  }

}
