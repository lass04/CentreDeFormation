import { candidats } from '../lists-load/candidats-load';
import { Injectable, OnInit } from '@angular/core';

import { Formation } from '../interfaces/formation';
import { Candidat } from '../interfaces/candidat';
import { Session } from '../interfaces/session';
import { Formateur } from '../interfaces/formateur';    

import { formations } from '../lists-load/formations-load';
import { sessions } from '../lists-load/sessions-load';
import { formateurs } from '../lists-load/formateurs-load';


@Injectable({
  providedIn: 'root',
})

export class DataService implements OnInit{
  


  Categories:string[]=[

    'java','python','linux','communication','finance','trading',
    'marketing','design',"programmation", "bases",
     "logique","html", "css", "javascript", "frontend",
    "api", "node.js", "express", "backend",
    "sql", "base de données", "requêtes",
    "flutter", "dart", "mobile",
     "administration", "serveurs",
    "cybersécurité", "sécurité", "réseaux",
    "ia", "machine learning", "algorithmes",
    "ux", "ui", "interfaces"
    
  ];

  ngOnInit(): void {
    this.SaveData();
  }

  Formations:Formation[]=formations;
  Formateurs:Formateur[]=formateurs;
  Sessions:Session[]=sessions;
  Candidats:Candidat[]=candidats;


  // Méthodes de Modification

  UpdateFormation(formation:Formation){
    const index=this.Formations.findIndex(f=>f.id===formation.id);
    if(index!==-1){
      this.Formations[index]=formation;
      this.SaveData();
    }}

  UpdateFormateur(formateur:Formateur){
    const index=this.Formateurs.findIndex(f=>f.id===formateur.id);
    if(index!==-1){
      this.Formateurs[index]=formateur;
      this.SaveData();
    }}

  UpdateSession(session:Session){
    const index=this.Sessions.findIndex(s=>s.id===session.id);
    if(index!==-1){
      this.Sessions[index]=session;
      this.SaveData();
    }}

  UpdateCandidat(candidat:Candidat){
    const index=this.Candidats.findIndex(c=>c.id===candidat.id);
    if(index!==-1){
      this.Candidats[index]=candidat;
      this.SaveData();
    }}

  // Méthodes de Suppression
  
  DeleteFormation(id:number){
    this.Formations=this.Formations.filter(f=>f.id!==id);
    this.SaveData();
  }

  DeleteFormateur(id:number){
    this.Formateurs=this.Formateurs.filter(f=>f.id!==id);
    this.SaveData();
  }

  DeleteSession(id:number){
    this.Sessions=this.Sessions.filter(s=>s.id!==id);
    this.SaveData();
  }

  DeleteCandidat(id:number){
    this.Candidats=this.Candidats.filter(c=>c.id!==id);
    this.SaveData();
  }
  

  // Méthodes de Récupération

  GetFormationById(id:number):Formation | undefined{
    this.getData();
    return this.Formations.find(f=>f.id===id);
  }

  GetFormationByKeyword(keyword:string):Formation[] {
    this.getData();
    return this.Formations.filter(f=>(f.motCles).includes(keyword));
  }

  GetFormateurById(id:number):Formateur | undefined{
    this.getData();
    return this.Formateurs.find(f=>f.id===id);
  }

  GetSessionById(id:number):Session | undefined{
    this.getData();
    return this.Sessions.find(s=>s.id===id);
  }

  GetSessionsByFormationId(formation:Formation):Session[]{
    this.getData();
    return this.Sessions.filter(s=>s.formation.id===formation.id)
  }

  GetCandidatById(id:number):Candidat | undefined{
    this.getData();
    return this.Candidats.find(c=>c.id===id);
  }

  GetCandidatByCin(cin:number):Candidat|undefined{
    this.getData();
    return this.Candidats.find(c=>c.cin==cin);
  }

  GetCategories():string[]{
    return [...this.Categories];
  }

  GetFormations():Formation[]{
    this.getData();
    return [...this.Formations];
  }

  GetFormateurs():Formateur[]{
    this.getData();
    return [...this.Formateurs];
  }

  GetSessions():Session[]{
    this.getData();
    return [...this.Sessions];
  }

  GetCandidats():Candidat[]{
    this.getData();
    return [...this.Candidats];
  } 

  // Méthodes d'Ajout

  AddFormation(formation:Formation){
    this.Formations.push(formation);
    this.SaveData();
  }

  AddFormateur(formateur:Formateur){
    this.Formateurs.push(formateur);
    this.SaveData();
  }

  AddSession(session:Session){
    this.Sessions.push(session);
    this.SaveData();
  }

  AddNewCandidat(candidat:Candidat){
    this.Candidats.push(candidat);
    this.SaveData();
  }

  AddCandidatToSession(candidat:Candidat,session:Session){
    const index=this.Sessions.findIndex(s=>s.id===session.id);
    if(index!==-1){
      this.Sessions[index].candidats_inscrits.push(candidat);
      this.SaveData();
    }
  }


  // Méthodes du LocalStorage

  SaveData(){
    localStorage.setItem('formations',JSON.stringify(this.Formations));
    localStorage.setItem('formateurs',JSON.stringify(this.Formateurs));
    localStorage.setItem('sessions',JSON.stringify(this.Sessions));
    localStorage.setItem('candidats',JSON.stringify(this.Candidats));
    localStorage.setItem('categories',JSON.stringify(this.Categories));
  }

  getData(){

    const formations=localStorage.getItem('formations');
    const formateurs=localStorage.getItem('formateurs');
    const sessions=localStorage.getItem('sessions');
    const candidats=localStorage.getItem('candidats');

    if(formations){
      this.Formations=JSON.parse(formations);
    }
    if(formateurs){
      this.Formateurs=JSON.parse(formateurs);
    }
    if(sessions){
      this.Sessions=JSON.parse(sessions);
    }
    if(candidats){
      this.Candidats=JSON.parse(candidats);
    }
  }

}
