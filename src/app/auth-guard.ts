import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { AuthGoogle } from './auth-google';
import { Profile } from './landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: AuthGoogle = inject(AuthGoogle);
  const router: Router = inject(Router);

  const loggedProfile: Profile = loginService.getLoggedProfile();

  if(loggedProfile){
    return true;
  }

  router.navigate(['']);


  return false;
};
