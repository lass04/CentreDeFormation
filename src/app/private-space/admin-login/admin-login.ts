import { Authservice } from './../../services/authservice';
import { DataService } from '../../services/data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-login',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
 
  username="";
  password="";

  constructor(private dataSvc:DataService,private authSvc:Authservice,private router:Router){}

  onSubmit(){
   if(this.authSvc.verify(this.username,this.password)){
    this.router.navigate(['/private-space/home']);
   }
   else {
    alert("Coordonnées Incorrects !");
    this.router.navigate(['/private-space']);
    
   }
  }
}
