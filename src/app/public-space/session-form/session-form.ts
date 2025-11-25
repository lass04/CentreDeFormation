import { Navbar } from './../../components/navbar/navbar';
import { PublicSpaceRoutingModule } from './../public-space-routing-module';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'app-session-form',
  imports: [FormsModule,CommonModule,RouterModule,Navbar],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css',
})
export class SessionForm implements OnInit{

  candidatAssociative :{[nom:string]:string}={
    "nom":"",
    "prenom":"",
    "email":"",
    "cin":""
  };
  session?:Session;

  constructor(private DataSvc:DataService,private ActRoute:ActivatedRoute,private router : Router){}

  ngOnInit(){
    //Récupérer l'id de la session depuis l'URL
    const id = this.ActRoute.snapshot.paramMap.get('id');
    if(id!=null){
      this.session=this.DataSvc.GetSessionById(+id);
    }
    else 
      this.router.navigate(['/not_found']);
  }

  onSubmit(){

    // Récupérer le candidat par son CIN
    if(this.session!=undefined){
      let findCandidat =  this.DataSvc.GetCandidatByCin(parseInt(this.candidatAssociative["cin"]));
      
      if(findCandidat==undefined) {
        alert("Candidat Introuvable , Vérifier les coordonnées");
        this.router.navigate(['/public-space/sessionform',this.session.id]);
      }
        // Ajouter le candidat à la session concernée
      else if(this.session.complet==false){
           this.DataSvc.AddCandidatToSession(findCandidat,this.session) 
           alert("Vous etes inscrits dans la session")
           this.router.navigate(['']);
               }
    }
  }

}
