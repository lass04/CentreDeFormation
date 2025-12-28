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

export class Sessions {

  ToAdd=false;
  ToUpdate = false;
  SessionToUpdate=sessions[0];
  sessions=sessions;

  constructor(private router:Router,private dataSvc: DataService){}
  

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

  Add(){
      this.ToAdd = true;
    }

    SessionToAdd :Session = {
      id:this.sessions.length+1,
      date_debut:"",
      date_fin:"",
      formateur:0,
      formation:0,
      description:"",
      candidats_inscrits:[],
      complet:false
    }

  OnSubmitAdd(){
    let LinkFormateur=this.dataSvc.GetFormateurById(this.SessionToAdd.formateur);
    if(LinkFormateur)
      this.SessionToAdd.formateur=LinkFormateur;

    let LinkFormation=this.dataSvc.GetFormationById(this.SessionToAdd.formation);
    if(LinkFormation)
      this.SessionToAdd.formateur=LinkFormation;
    
    this.dataSvc.AddSession(this.SessionToAdd)
    this.ToAdd = false;
  }


  OnSubmitUpdate(){
    this.dataSvc.UpdateSession(this.SessionToUpdate)
    this.ToUpdate = false;
  }

}
