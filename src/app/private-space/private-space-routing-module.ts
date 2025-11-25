import { Privatehome } from './privatehome/privatehome';
import { AdminLogin } from './admin-login/admin-login';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:Privatehome},
  {path:"adminlogin",component:AdminLogin}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateSpaceRoutingModule { }
