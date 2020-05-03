import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './authentication.service';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AuthenticationRoutingModule } from './authentication.routing';
import { LoggingService } from '../logging.service';
import { User } from '../model/user-model';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let http : HttpClient;
  let authService;
  let router : Router;
  let logging : LoggingService ;
  let comp;
  let submitEl;
  let loginEl;
  let passEl;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      declarations: [ AuthenticationComponent ],
      providers: [Router]

    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AuthenticationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [RouterTestingModule,FormsModule,ReactiveFormsModule,BrowserModule,AuthenticationRoutingModule],
  //     declarations: [AuthenticationComponent],
  //     providers: [AuthService, Router],
  //   }).compileComponents().then(()=>{
  //     fixture = TestBed.createComponent(AuthenticationComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });
  // });

  beforeEach(() => {
    logging = new LoggingService();
    authService = new AuthService(http,logging);
    component = new AuthenticationComponent(authService,router,logging);
    TestBed.configureTestingModule({
      declarations:[AuthenticationComponent]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true ', () => {
    component.onLogin;
  expect(component).toBeTruthy();
});

});
