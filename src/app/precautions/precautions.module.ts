import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PrecautionsComponent } from './precautions.component';
import { PrecautionsRoutingModule } from './precautions.routing';


@NgModule({
  declarations: [
    PrecautionsComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    PrecautionsRoutingModule
  ]
})
export class PrecautionsModule {}
