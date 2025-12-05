import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Privatenavbar } from './../../components/privatenavbar/privatenavbar';
import { DataService } from './../../services/data-service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { Candidat } from '../../interfaces/candidat';
import { candidats } from '../../lists-load/candidats-load';

@Component({
  selector: 'app-candidats',
  imports: [Privatenavbar,FormsModule,CommonModule],
  templateUrl: './candidats.html',
  styleUrl: './candidats.css',
})
export class Candidats implements OnInit{

  CandidatToUpdate:Candidat=candidats[0];
  ToUpdate:boolean=false;
  candidats:Candidat[]=[];

  constructor(private router:Router,private dataSvc:DataService){}

  ngOnInit(){
    this.candidats = this.dataSvc.GetCandidats();
  }

  // Suppression du candidat conçerné

  Delete(id:number){
    const CandidatName = this.dataSvc.GetCandidatById(id)?.nom; 
    let confirmer = confirm("Etes vous sur de supprimer le candidat "+CandidatName);
    if(confirmer){
      this.dataSvc.DeleteCandidat(id);
      this.router.navigate(['/private-space/cadidats']);
    }
  }

  // Rechercher le candidat By Id , et affecter true à ToUpdate 
  // pour rendre le formulaire visible
  Update(id:number){
     const Search = this.dataSvc.GetCandidatById(id);
     if(Search){
      this.CandidatToUpdate = Search;
      this.ToUpdate=true; 
    }
  }

  OnSubmit(){
    this.dataSvc.UpdateCandidat(this.CandidatToUpdate);
    this.ToUpdate=false;
    console.log(this.CandidatToUpdate);
  }

}
