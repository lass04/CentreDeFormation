import { Authservice } from './../../services/authservice';
import { Navbar } from './../../components/navbar/navbar';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data-service';
import { Formation } from '../../interfaces/formation';


@Component({
  selector: 'app-formationrech',
  imports: [RouterModule,CommonModule,Navbar],
  templateUrl: './formationrech.html',
  styleUrl: './formationrech.css',
})
export class Formationrech implements OnInit{

  dirty=false;
  formations:Formation[]=[];
  constructor(private dataSvc : DataService,private authSvc:Authservice){}

  ngOnInit(){
    this.authSvc.logout();
    this.formations=this.dataSvc.GetFormations();
  }

  Search(keyWord:string){
    this.dirty=true;
    this.formations=this.dataSvc.GetFormationByKeyword(keyWord.toLowerCase());
  }
}
