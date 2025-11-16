import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { DataService } from '../../data-service';
import { Formation } from '../../interfaces/formation';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  formations:Formation[]=[];
  categories:string[]=[];

  presentations:number[]=[]
  constructor(private dataSvc : DataService,private router:Router){}

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
    this.presentations[i] = Math.floor(Math.random() * 10) ;
}

    console.log(this.presentations)
    this.categories=this.dataSvc.GetCategories();
    this.categories.map(ele=>ele.toUpperCase());
    this.formations=this.dataSvc.GetFormations();
  }

  goToFormation(id:number){
    this.router.navigate(['/public-space/formationdetail',id]);
  }
}


