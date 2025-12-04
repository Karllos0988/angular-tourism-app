import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { CategoriaServe } from '../categoria-serve';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class CategoriaComponent {
  camposForm: FormGroup

  constructor(private service:CategoriaServe){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar(){ 
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: categoria => {
          console.log('Salva com sucesso!', categoria);
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
