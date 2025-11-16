import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data-service';
import { Formation } from '../../interfaces/formation';

@Component({
  selector: 'app-formationrech',
  imports: [RouterModule,CommonModule],
  templateUrl: './formationrech.html',
  styleUrl: './formationrech.css',
})
export class Formationrech implements OnInit{

  formations:Formation[]=[];
  constructor(private dataSvc : DataService){}

  ngOnInit(){
    this.formations=this.dataSvc.GetFormations();
  }

  Search(formation:string){
    this.formations=this.dataSvc.GetFormationByKeyword(formation.toLowerCase());
  }
}
