import { Component } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaServe } from '../../categorias/categoria-serve';
import { LugarService } from '../../lugares/lugar-service';

@Component({
  selector: 'app-galeria-component',
  standalone: false,
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.scss',
})
export class GaleriaComponent {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private categoriaService: CategoriaServe,
    private lugarService: LugarService
  ){}

  ngOnInit(){
    this.categoriaService.obterTodas()
      .subscribe((categoria) => this.categoriasFiltro = categoria);
    this.lugarService.obterTodos()
      .subscribe((lugarReturn) => this.lugares = lugarReturn);
  }

  getTotalEstrelas(lugar: Lugar){
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }


  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(resultado => this.lugares = resultado)
  }
}
