import { Formateurs } from './formateurs/formateurs';
import { formateurs } from './../lists-load/formateurs-load';
import { Sessions } from './sessions/sessions';
import { Formations } from './formations/formations';
import { authGuard } from './../auth-guard';
import { Privatehome } from './privatehome/privatehome';
import { AdminLogin } from './admin-login/admin-login';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Candidats } from './candidats/candidats';

const routes: Routes = [
  {path:"",component:AdminLogin},
  {path:"home",component:Privatehome,canActivate:[authGuard]},
  {path:"formations",component:Formations,canActivate:[authGuard]},
  {path:"candidats",component:Candidats,canActivate:[authGuard]},
  {path:"formateurs",component:Formateurs,canActivate:[authGuard]},
  {path:"sessions",component:Sessions,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSpaceRoutingModule { }
