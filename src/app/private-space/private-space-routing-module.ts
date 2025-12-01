import { authGuard } from './../auth-guard';
import { Privatehome } from './privatehome/privatehome';
import { AdminLogin } from './admin-login/admin-login';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:AdminLogin},
  {path:"home",component:Privatehome,canActivate:[authGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSpaceRoutingModule { }
