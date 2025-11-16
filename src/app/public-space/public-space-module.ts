import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSpaceRoutingModule } from './public-space-routing-module';
import { RouterModule } from '@angular/router';
import { Formationdetail } from './formationdetail/formationdetail';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicSpaceRoutingModule,
    RouterModule,
  ]
})
export class PublicSpaceModule { }
