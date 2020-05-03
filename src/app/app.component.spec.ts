import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { StatedataComponent } from './dashboard/statedata/statedata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggingService } from './logging.service';
import { AuthService } from './authentication/authentication.service';
import { AuthGuard } from './authentication/authentication.guard';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    {path : 'statedata' , component : StatedataComponent},
    { path: 'precautions', component: PrecautionsComponent},
    {path: 'not-found', component:PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  ]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        PrecautionsComponent,
        StatedataComponent,
        DashboardComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'COVID-APPLICATION'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('COVID-APPLICATION');
  });

});
