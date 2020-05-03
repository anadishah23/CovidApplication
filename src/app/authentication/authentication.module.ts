import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
