import { inject, Injectable, signal } from '@angular/core';
import  {AuthConfig, OAuthService} from 'angular-oauth2-oidc'
import {auth} from './auth.config'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogle {
  
  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor(){
    this.initConfiguration()
  }
  
  initConfiguration(){
    this.oauthService.configure(auth); //configurar cliente
    this.oauthService.setupAutomaticSilentRefresh(); //uma vez que tiver autenticado não ficar pedindo uma nova autenticação em cada página
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then( () => { //Após logar trás de volta para o nosso sistema e quando resolver chama o then
      if(this.oauthService.hasValidIdToken()){
        this.profile.set(this.oauthService.getIdentityClaims()); //Se foi validado com sucesso o usuario recebe os dados de autenticação
      }
    }) 
  }

  login(){
    this.oauthService.initImplicitFlow(); //metodo de autenticação do google
  }

  logout(){
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['']);
  }

  getLoggedProfile(){
    return this.profile();
  }
}
