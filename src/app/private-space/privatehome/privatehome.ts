import { sessions } from './../../lists-load/sessions-load';
import { formateurs } from './../../lists-load/formateurs-load';
import { candidats } from './../../lists-load/candidats-load';
import { formations } from './../../lists-load/formations-load';
import { Privatenavbar } from './../../components/privatenavbar/privatenavbar';
import { Authservice } from './../../services/authservice';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatehome',
  imports: [RouterModule,Privatenavbar],
  templateUrl: './privatehome.html',
  styleUrl: './privatehome.css',
})
export class Privatehome {
  
  formations=formations;
  candidats=candidats;
  formateurs=formateurs;
  sessions=sessions;
  
  constructor(private authSvc:Authservice,private router: Router){}

 Logout(){
  this.authSvc.logout();
  this.router.navigate(['/private-space']);
 }

}
