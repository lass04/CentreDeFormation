import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formationrech } from './formationrech/formationrech';
import { Formationdetail } from './formationdetail/formationdetail';

const routes: Routes = [
  {path:'formationrech',component:Formationrech},
  {path:'formationdetail/:id',component:Formationdetail}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSpaceRoutingModule { }
