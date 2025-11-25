import { formations } from './../../lists-load/formations-load';
import { Navbar } from './../navbar/navbar';
import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Formation } from '../../interfaces/formation';

@Component({
  selector: 'app-home',
  imports: [RouterModule,Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  formations=formations;
  categories:string[]=[];
  presentations:Formation[]=[]

  constructor(private dataSvc : DataService,private router:Router){}

  ngOnInit(){

    // Remplissage du tableau avec 3 distinctes formations

   for(let i=0;i<3;i++){
    let alea = Math.floor(Math.random()*10);

    while(this.presentations.includes(this.formations[alea])){
      alea = Math.floor(Math.random()*10);
    }
    this.presentations[i]=this.formations[alea];
   }
  
    this.categories=this.dataSvc.GetCategories();
    this.categories=this.categories.map(ele=>ele.toUpperCase());
    
  }

  // Fonction de redirection vers la formation spécifiée (Par Id)

  goToFormation(id:number){
    this.router.navigate(['/public-space/formationdetail',id]);
  }

}


