import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../authentication/authentication.guard';
import { AddNewNewsComponent } from './add-new-news.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewNewsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewsRoutingModule {}
