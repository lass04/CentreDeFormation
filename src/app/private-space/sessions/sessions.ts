import { sessions } from './../../lists-load/sessions-load';
import { DataService } from './../../services/data-service';
import { Privatenavbar } from './../../components/privatenavbar/privatenavbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'app-sessions',
  imports: [CommonModule,FormsModule,Privatenavbar],
  templateUrl: './sessions.html',
  styleUrl: './sessions.css',
})
export class Sessions implements OnInit{

  ToUpdate = false;
  SessionToUpdate=sessions[0];
  sessions:Session[]=[];

  constructor(private router:Router,private dataSvc: DataService){}
  
  ngOnInit(){
    this.sessions = this.dataSvc.GetSessions();
  }

  Delete(id:number){
    let confirmer = confirm("Etes-vous sur de supprimer ?");
    if(confirmer){
      this.dataSvc.DeleteSession(id);
    }
  }

  Update(id:number){
    this.ToUpdate = true;
    const find = this.dataSvc.GetSessionById(id);
    if(find){
      this.SessionToUpdate = find;
    }
  }

  OnSubmit(){
    this.dataSvc.UpdateSession(this.SessionToUpdate)
    this.ToUpdate = false;
  }

}
