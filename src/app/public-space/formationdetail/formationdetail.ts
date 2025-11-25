import { Navbar } from './../../components/navbar/navbar';
import { candidats } from './../../lists-load/candidats-load';
import { sessions } from './../../lists-load/sessions-load';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule} from '@angular/router';
import { Formation } from '../../interfaces/formation';
import { DataService } from '../../data-service';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'app-formationdetail',
  imports: [RouterModule,Navbar],
  templateUrl: './formationdetail.html',
  styleUrl: './formationdetail.css',
})
export class Formationdetail implements OnInit{

  formation?:Formation;
  sessions:Session[]=[];

  constructor(private actRoute:ActivatedRoute,private DataSvc:DataService,private router:Router){}

  
  ngOnInit() {
    //Récupérer l'id de la formation à afficher
    const id:string|null=this.actRoute.snapshot.paramMap.get('id');

    if(id!=null){
      this.formation=this.DataSvc.GetFormationById(+id);

      // Récupérer les sessions de la formation et dont le nbr de candidats est < 15

      if(this.formation!=undefined){
      this.sessions=this.DataSvc.GetSessionsByFormationId(this.formation);
      this.sessions.filter(s=>s.complet==true);
      
    }}
    else
      this.router.navigate(['/components/not_found']);
    
  }


}
