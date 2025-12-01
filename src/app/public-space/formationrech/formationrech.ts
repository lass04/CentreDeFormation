import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service';
import { Formation } from '../../interfaces/formation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formationrech',
  imports: [RouterModule,CommonModule],
  templateUrl: './formationrech.html',
  styleUrl: './formationrech.css',
})
export class Formationrech implements OnInit{

  pristine:boolean=true;
  formations:Formation[]=[];
  constructor(private dataSvc : DataService){}

  ngOnInit(){
    this.formations=this.dataSvc.GetFormations();
  }

  Search(formation:string){
    this.pristine=false;
    this.formations=this.dataSvc.GetFormationByKeyword(formation.toLowerCase());
  }
}
