import { Authservice } from './../../services/authservice';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatehome',
  imports: [RouterModule],
  templateUrl: './privatehome.html',
  styleUrl: './privatehome.css',
})
export class Privatehome {
  
  constructor(private authSvc:Authservice,private router: Router){}

 Logout(){
  this.authSvc.logout();
  this.router.navigate(['/private-space']);
 }

}
