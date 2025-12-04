import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Categoria } from '../../categorias/categoria';
import { CategoriaServe } from '../../categorias/categoria-serve';
import { LugarService } from '../lugar-service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss',
})
export class LugarComponent {

  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriasService: CategoriaServe,
    private service: LugarService
  ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    });
  }

  ngOnInit(){
    this.categoriasService.obterTodas().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias
    })
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: (resultado) => {
          console.log('Cadastrado com sucesso!', resultado);
          this.camposForm.reset();
        },
        error: erro => console.log('Error!', erro)
      })
    }
  }


  isCampoValid(nomeCampo: string): boolean{
    const campo =  this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }

}
