import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule} from '@angular/router';
import { Formation } from '../../interfaces/formation';
import { DataService } from '../../data-service';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'app-formationdetail',
  imports: [RouterModule],
  templateUrl: './formationdetail.html',
  styleUrl: './formationdetail.css',
})
export class Formationdetail implements OnInit{

  formation?:Formation;
  sessions?:Session[];

  constructor(private actRoute:ActivatedRoute,private DataSvc:DataService,private router:Router){}

  ngOnInit() {
    const id:string|null=this.actRoute.snapshot.paramMap.get('id');
    if(id!=null){
      this.formation=this.DataSvc.GetFormationById(+id);
     if(this.formation!=undefined){
      this.sessions=this.DataSvc.GetSessionsByFormation(this.formation);
      
    }}
    else
      this.router.navigate(['/components/not_found']);
    
  }

  

}
