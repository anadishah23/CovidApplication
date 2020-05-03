import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from './authentication.service';
import { User } from '../model/user-model';
import { Router } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {

  loginForm : FormGroup;
  error: string = null;

  constructor(private authService : AuthService, private router : Router,private Log:LoggingService) { }

  authenticUser : User[];
  ngOnInit(): void {
  }

  onLogin(form:NgForm){
    if(!form.valid){
      return;
    }
    
    const IUser = form.value.loginID;
    const IPass = form.value.password;

     this.authService.checkLoginCredential(IUser)
    .subscribe(
      (response) =>
      {
        this.authenticUser = response;
        if(this.authenticUser.length == 0 ){
          this.error = "Please enter valid credentials";
          alert(this.error);
          return false;
        }
        else if(this.authenticUser.length > 1){
          this.error = "Multiple User Found";
          alert(this.error);
          return;
        }
        else{
           this.Log.loggingSuccess("Get call was successful");
          if(this.authenticUser[0].username == IUser && this.authenticUser[0].password == IPass){
            localStorage.setItem("currentUser","true");
            window.location.reload();
            this.router.navigate(['/dashboard']);
            
          }
          else if (this.authenticUser[0].username == IUser){
            this.error = "Invalid Password";
            alert(this.error);
            return false;
          }
          else{
            this.error="Invalid Credential";
            alert(this.error);
            return false;
          }
        }
      },
      (error) =>{
        alert("Getting Error response");
        error = error;
        return false;
      }
    )
  }
}
