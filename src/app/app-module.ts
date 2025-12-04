import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideOAuthClient} from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {withFetch, provideHttpClient} from '@angular/common/http';
import { Landingpage } from './landingpage/landingpage'

@NgModule({
  declarations: [
    App,
    Landingpage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideOAuthClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
