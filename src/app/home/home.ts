import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data-service';
import { Formation } from '../interfaces/formation';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  formations:Formation[]=[];
  categories:string[]=[];
  constructor(private dataSvc : DataService){}

  ngOnInit(): void {
    this.categories=this.dataSvc.GetCategories();
    this.formations=this.dataSvc.GetFormations();
  }
}


