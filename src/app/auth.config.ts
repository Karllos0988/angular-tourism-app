import {AuthConfig} from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '667527297372-miq9rdnjh8hf8c69pc7d11et6cutb9ca.apps.googleusercontent.com' ,
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}