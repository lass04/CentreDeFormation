import { Navbar } from './../../components/navbar/navbar';
import { DataService } from '../../services/data-service';
import { formations } from './../../lists-load/formations-load';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations-list',
  imports: [RouterModule,Navbar],
  templateUrl: './formations-list.html',
  styleUrl: './formations-list.css',
})
export class FormationsList implements OnInit{
  
  categorie="";
  formations=formations;
  exist=false;

  constructor(private actRoute : ActivatedRoute,private dataSvc: DataService){}

  ngOnInit(){
     const cat : string|null = this.actRoute.snapshot.paramMap.get('categorie');
     
     if(cat!=null){
      this.categorie=cat;
      this.formations=this.dataSvc.GetFormations();
      this.formations=this.formations.filter(f=>f.motCles.includes(cat.toLowerCase()));
      if(this.formations.length>0)
        this.exist=true;
     }    
  }

  

}
