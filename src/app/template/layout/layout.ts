import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutProps } from './layoutprops';
import { filter, map } from 'rxjs';
import { AuthGoogle } from '../../auth-google';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  props: LayoutProps = {titulo: '', subTitulo: ''};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: AuthGoogle
  ){}

  ngOnInit(){
    this.router.events.pipe(
      filter(() => this.activatedRoute.firstChild !== null),
      map(() => this.obterPropsLayout() )
    ).subscribe((props: LayoutProps) => this.props = props)
  }

  obterPropsLayout(): LayoutProps{
    let rotaFilha = this.activatedRoute.firstChild;

    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProps
  }

  logout(){
    this.loginService.logout();
  }

}
