import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { formateurs } from './../../lists-load/formateurs-load';
import { Privatenavbar } from './../../components/privatenavbar/privatenavbar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../../interfaces/formateur';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-formateurs',
  imports: [Privatenavbar,CommonModule,FormsModule],
  templateUrl: './formateurs.html',
  styleUrl: './formateurs.css',
})
export class Formateurs implements OnInit{

    FormateurToUpdate: Formateur=formateurs[0];
    ToUpdate:boolean=false;
    formateurs:Formateur[]=[];
  
    constructor(private router:Router,private dataSvc:DataService){}
  
    ngOnInit(){
      this.formateurs = this.dataSvc.GetFormateurs();
    }
  
    // Suppression du candidat conçerné
  
    Delete(id:number){
      const FormateurName = this.dataSvc.GetFormateurById(id)?.nom; 
      let confirmer = confirm("Etes vous sur de supprimer le candidat "+FormateurName);
      if(confirmer){
        this.dataSvc.DeleteFormateur(id);
        this.router.navigate(['/private-space/formateurs']);
      }
    }
  
    // Rechercher le candidat By Id , et affecter true à ToUpdate 
    // pour rendre le formulaire visible

    Update(id:number){
       const Search = this.dataSvc.GetFormateurById(id);
       if(Search){
        this.FormateurToUpdate = Search;
        this.ToUpdate=true; 
      }
    }

    GoToCv(id:number){
      this.router.navigate(['/private-space'])
    }
  
  
    OnSubmit(){
      this.dataSvc.UpdateFormateur(this.FormateurToUpdate);
      this.ToUpdate=false;
      
    }
  
}
