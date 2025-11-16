import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Formation } from '../../interfaces/formation';
import { formations } from '../../lists-load/formations-load';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  formations:Formation[]=[];
  categories:string[]=[];
  aleatoires:Formation[]=[]

  constructor(private dataSvc : DataService,private router:Router){}

  ngOnInit(){

    this.dataSvc.SaveData();

    for (let i = 0; i < 3; i++) {
    let alea = Math.floor(Math.random() * 10) ;
    this.aleatoires[i] = formations[alea] ;
    while(this.aleatoires[i-1] && this.aleatoires[i]==this.aleatoires[i-1]){
      alea = Math.floor(Math.random() * 10) ;
      this.aleatoires[i] = formations[alea] ;}
    }

    this.categories=this.dataSvc.GetCategories();
    this.categories.forEach((ele, index, arr) => {
    arr[index] = ele.toUpperCase();
  });
  
    this.formations=this.dataSvc.GetFormations();
  }

  goToFormation(id:number){
    this.router.navigate(['/public-space/formationdetail',id]);
  }
}


