import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formationrech } from './formationrech/formationrech';

const routes: Routes = [
  {path:'formationrech',component:Formationrech},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSpaceRoutingModule { }
