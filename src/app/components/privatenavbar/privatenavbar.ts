import { Authservice } from './../../services/authservice';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privatenavbar',
  imports: [RouterModule],
  templateUrl: './privatenavbar.html',
  styleUrl: './privatenavbar.css',
})
export class Privatenavbar {

  constructor(private authSvc : Authservice,private router:Router){}

  Logout(){
    this.authSvc.logout();
    this.router.navigate(['/private-space']);
  }
}
