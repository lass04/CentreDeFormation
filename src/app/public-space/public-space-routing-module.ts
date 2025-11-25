import { FormationsList } from './formations-list/formations-list';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formationrech } from './formationrech/formationrech';
import { Formationdetail } from './formationdetail/formationdetail';
import { SessionForm } from './session-form/session-form';


const routes: Routes = [
  {path:'formationrech',component:Formationrech},
  {path:'formationdetail/:id',component:Formationdetail},
  {path:'sessionform/:id',component:SessionForm},
  {path:'formationslist/:categorie',component:FormationsList}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSpaceRoutingModule { }
