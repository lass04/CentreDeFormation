import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
   logged=false;

   constructor(){
    // Récuperer la valeur booléene depuis le navigateur
    this.logged = localStorage.getItem('isAdminLogged')==='true';
   }

   // Vérifier les coordonnées et affecter true à isAdminLogged dans le navigateur
  //  Si la condition est vraie 
   verify(username:string,password:string):Boolean{
     if(username=='Admin' && password=='Admin'){
      this.logged=true;
      localStorage.setItem('isAdminLogged','true');
      return true;
     }
     else 
      return false;
   }

  // Déconnecter , Permet d'affecter false à isAdminLogged dans le navigateur
   logout(){
    localStorage.setItem('isAdminLogged','false');
    this.logged = false;
   }

   // Récupérer la variable isAdminLogged depuis le navigateur
   getBoolean(){
    this.logged = localStorage.getItem('isAdminLogged')==='true';
    return this.logged;
   }
}
