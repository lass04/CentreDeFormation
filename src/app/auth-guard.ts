import { Authservice } from './services/authservice';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authSvc = inject(Authservice);
  const router = inject(Router);

  if(authSvc.getBoolean()==true){
    return true;
  }
  else {
    alert("Connectez-vous en tant qu'Admin !!");
    return router.navigate(['/private-space']);
  }
};
