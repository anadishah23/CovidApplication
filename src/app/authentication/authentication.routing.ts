import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { AuthLoginGuard } from './authentication-login.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    canActivate: [AuthLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
