import { formations } from './../../lists-load/formations-load';
import { DataService } from './../../services/data-service';
import { Privatenavbar } from './../../components/privatenavbar/privatenavbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../../interfaces/formation';

@Component({
  selector: 'app-formations',
  imports: [CommonModule,FormsModule,Privatenavbar],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class Formations implements OnInit {
  
  ToUpdate=false;
  formations:Formation[]=[];
  FormationToUpdate=formations[0];

  constructor(private router:Router,private dataSvc: DataService){}
  
  ngOnInit(){
    this.formations = this.dataSvc.GetFormations();
  }

  Update(id:number){
    this.ToUpdate = true;
    const find = this.dataSvc.GetFormationById(id);
    if(find!=undefined)
      this.FormationToUpdate = find;
  }

  Delete(id:number){
     let confirmer = confirm("Etes-vous sur de supprimer la formation ?");
     if(confirmer){
      this.dataSvc.DeleteFormation(id);
     }
  }

  GoToPDF(id:number){
    this.router.navigate(['/private-space/pdf',id]);
  }

  OnSubmit(){
    this.dataSvc.UpdateFormation(this.FormationToUpdate);
    this.ToUpdate = false;
  }

}
