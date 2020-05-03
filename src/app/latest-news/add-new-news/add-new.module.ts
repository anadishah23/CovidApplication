import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewsRoutingModule } from '../add-new-news/add-new.routing';
import { AddNewNewsComponent } from '../add-new-news/add-new-news.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AddNewNewsComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AddNewsRoutingModule,
    ToastrModule.forRoot(),
    CommonModule
  ]
})
export class AddNewModule {}
