import { Component, signal, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
    ngOnInit() {
  // Vérifie si la migration a déjà été faite
  if (!localStorage.getItem('migration_sessions_v2_done')) {
    
    // Supprime les anciennes données
    localStorage.removeItem('sessions');

    // Marque la migration comme faite
    localStorage.setItem('migration_sessions_v2_done', 'true');
  }
}

  protected readonly title = signal('CentreDeFormation');
}
