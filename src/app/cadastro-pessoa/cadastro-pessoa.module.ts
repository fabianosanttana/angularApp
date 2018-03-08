import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule , FormsModule
  ],
  exports: [CadastroPessoaFormComponent, CadastroPessoaListaComponent,CadastroPessoaComponent],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent,CadastroPessoaComponent]
})
export class CadastroPessoaModule { }
